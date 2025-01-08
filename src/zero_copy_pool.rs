use solana_program::{
    account_info::AccountInfo,
    program_error::ProgramError,
    pubkey::Pubkey,
};

/// Zero-copy memory pool for efficient neural network operations
pub struct ZeroCopyPool<'a> {
    pub data: &'a mut [u8],
    pub head: usize,
    pub capacity: usize,
}

impl<'a> ZeroCopyPool<'a> {
    pub fn new(data: &'a mut [u8]) -> Self {
        let capacity = data.len();
        ZeroCopyPool {
            data,
            head: 0,
            capacity,
        }
    }

    /// Allocate space in the pool without copying
    pub fn alloc(&mut self, size: usize) -> Result<&mut [u8], ProgramError> {
        if self.head + size > self.capacity {
            return Err(ProgramError::AccountDataTooSmall);
        }

        let start = self.head;
        self.head += size;

        Ok(&mut self.data[start..self.head])
    }

    /// Free space in the pool
    pub fn free(&mut self, size: usize) {
        if size <= self.head {
            self.head -= size;
        }
    }

    /// Get current utilization
    pub fn utilization(&self) -> f64 {
        self.head as f64 / self.capacity as f64
    }
}

/// Memory pool account state
#[repr(C)]
pub struct PoolState {
    pub is_initialized: bool,
    pub total_allocated: u64,
    pub owner: Pubkey,
}

impl PoolState {
    pub fn initialize(
        account: &AccountInfo,
        owner: &Pubkey,
    ) -> Result<(), ProgramError> {
        let mut data = account.try_borrow_mut_data()?;
        
        // Create state at start of account data
        let state = Self {
            is_initialized: true,
            total_allocated: 0,
            owner: *owner,
        };

        // Serialize state
        let state_bytes = bincode::serialize(&state)
            .map_err(|_| ProgramError::InvalidAccountData)?;

        // Copy state to account data
        data[..state_bytes.len()].copy_from_slice(&state_bytes);

        Ok(())
    }

    /// Create a zero-copy pool from the remaining account space
    pub fn create_pool(
        account: &AccountInfo,
    ) -> Result<ZeroCopyPool, ProgramError> {
        let mut data = account.try_borrow_mut_data()?;
        
        // Get size of state
        let state_size = std::mem::size_of::<PoolState>();
        
        // Create pool from remaining space
        Ok(ZeroCopyPool::new(&mut data[state_size..]))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_zero_copy_pool() {
        let mut data = vec![0u8; 1000];
        let mut pool = ZeroCopyPool::new(&mut data);

        // Allocate space
        let buf1 = pool.alloc(100).unwrap();
        assert_eq!(buf1.len(), 100);
        assert_eq!(pool.head, 100);

        // Allocate more space
        let buf2 = pool.alloc(200).unwrap();
        assert_eq!(buf2.len(), 200);
        assert_eq!(pool.head, 300);

        // Free space
        pool.free(200);
        assert_eq!(pool.head, 100);

        // Check utilization
        assert_eq!(pool.utilization(), 0.1);
    }
}
