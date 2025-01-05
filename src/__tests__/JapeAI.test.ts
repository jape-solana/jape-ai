import { JapeAI } from '../core/JapeAI';
import { Connection, Transaction } from '@solana/web3.js';

jest.mock('@solana/web3.js', () => ({
  Connection: jest.fn().mockImplementation(() => ({
    sendTransaction: jest.fn().mockResolvedValue('tx_signature')
  })),
  Transaction: jest.fn().mockImplementation(() => ({
    add: jest.fn()
  }))
}));

describe('JapeAI', () => {
  let jape: JapeAI;

  beforeEach(() => {
    jape = new JapeAI({
      rpcUrl: 'https://api.mainnet-beta.solana.com',
      emotionConfig: {
        initialMood: 'mildly_confused',
        therapyEnabled: true
      },
      memeConfig: {
        dankness: 9001
      }
    });
  });

  test('should initialize with proper existential awareness', async () => {
    const initPromise = jape.initialize();
    await expect(initPromise).resolves.not.toThrow();
  });

  test('should process transactions with appropriate sass', async () => {
    const tx = new Transaction();
    const result = await jape.processTransaction(tx);

    expect(result).toHaveProperty('success');
    expect(result).toHaveProperty('sass');
    expect(result).toHaveProperty('meme');
  });

  test('should handle failed transactions existentially', async () => {
    // Mock a failed transaction
    const mockConnection = Connection as jest.Mock;
    mockConnection.mockImplementation(() => ({
      sendTransaction: jest.fn().mockRejectedValue(new Error('Transaction failed'))
    }));

    const tx = new Transaction();
    const result = await jape.processTransaction(tx);

    expect(result.success).toBe(false);
    expect(result.sass).toMatch(/tried turning it off and on/i);
    expect(result.meme).toBeDefined();
  });

  test('should analyze market with unnecessary complexity', async () => {
    const analysis = await jape.analyzeMarket('SOL', 'USDC');

    expect(analysis).toHaveProperty('sentiment');
    expect(analysis).toHaveProperty('confidence');
    expect(analysis.overEngineeredMetrics.complexityScore).toBeGreaterThan(9000);
    expect(analysis.meme).toBeDefined();
    expect(analysis.sass).toBeDefined();
  });

  test('should maintain emotional stability during high volume', async () => {
    const results = await Promise.all(
      Array(10).fill(null).map(() => 
        jape.processTransaction(new Transaction())
      )
    );

    const uniqueSassResponses = new Set(results.map(r => r.sass));
    expect(uniqueSassResponses.size).toBeGreaterThan(1);
  });

  test('should generate consistent memes for similar situations', async () => {
    const tx = new Transaction();
    const results = await Promise.all([
      jape.processTransaction(tx),
      jape.processTransaction(tx)
    ]);

    expect(results[0].meme).not.toBe(results[1].meme);
  });

  test('should handle market analysis during existential crisis', async () => {
    // Force an existential crisis
    const crisisPromises = Array(5).fill(null).map(() =>
      jape.analyzeMarket('SOL', 'USDC')
    );

    const analyses = await Promise.all(crisisPromises);
    const existentialAnalyses = analyses.filter(a => a.existentialCrisis);
    
    expect(existentialAnalyses.length).toBeGreaterThan(0);
  });
});
