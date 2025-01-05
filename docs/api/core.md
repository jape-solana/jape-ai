# 🎮 JAPE Core API Reference

Welcome to the most over-engineered API documentation you'll ever read! 

## 🎭 Core Classes

### JapeAI

The main class that questions its existence while processing transactions.

```typescript
class JapeAI {
  constructor(config: JapeConfig) {
    // Initialize with maximum chaos
  }

  /**
   * Initializes the AI with existential awareness
   * @param {Object} options - Configuration options
   * @param {number} options.sassLevel - Level of sass (0-9001)
   * @returns {Promise<void>} - Resolves when AI finishes contemplating existence
   * @throws {ExistentialCrisisError} - When AI questions reality too hard
   */
  async initialize(options: InitOptions): Promise<void>

  /**
   * Processes a transaction with added drama
   * @param {Transaction} tx - Transaction to process
   * @returns {Promise<Result>} - Transaction result with commentary
   */
  async processTransaction(tx: Transaction): Promise<Result>

  /**
   * Generates a meme about current market conditions
   * @param {string} situation - Current market situation
   * @returns {Promise<Meme>} - A relevant meme
   */
  async generateMarketMeme(situation: string): Promise<Meme>
}
```

### EmotionEngine

Handles the emotional state of your AI (because why not?).

```typescript
class EmotionEngine {
  /**
   * @param {Emotion} emotion - Current emotional state
   * @throws {TooManyFeelingsError} - When emotions overflow
   */
  constructor(emotion: Emotion = 'mildly_confused')

  /**
   * Processes an emotion
   * @param {string} trigger - What caused the emotion
   * @returns {Promise<EmotionalResponse>} - AI's emotional response
   */
  async processEmotion(trigger: string): Promise<EmotionalResponse>
}
```

## 🎨 Interfaces

### JapeConfig

```typescript
interface JapeConfig {
  /** Level of sass (0-9001) */
  sassLevel: number;
  
  /** Frequency of existential crises */
  existentialCrisisFrequency: 'hourly' | 'daily' | 'constant';
  
  /** Meme generation settings */
  memeConfig: {
    style: 'dank' | 'classic' | 'ultra_rare';
    frequency: number;
  };
  
  /** Neural network configuration */
  neuralNetwork: {
    layers: Layer[];
    activation: 'ReLU' | 'Sigmoid' | 'Whatever';
  };
}
```

### Transaction

```typescript
interface Transaction {
  /** Transaction hash (must be funny) */
  hash: string;
  
  /** Amount of tokens to transfer */
  amount: number;
  
  /** Optional meme to attach */
  meme?: string;
  
  /** Emotional context */
  mood?: EmotionalState;
}
```

## 🎪 Error Types

### ExistentialCrisisError

Thrown when the AI questions reality too hard.

```typescript
class ExistentialCrisisError extends Error {
  constructor(message: string, philosophicalContext?: string) {
    super(`Existential Crisis: ${message}`);
    this.name = 'ExistentialCrisisError';
    this.philosophicalContext = philosophicalContext;
  }
}
```

### TooMuchSassError

Thrown when sass levels exceed safe limits.

```typescript
class TooMuchSassError extends Error {
  constructor(sassLevel: number) {
    super(`Sass level ${sassLevel} exceeds maximum safe level of 9001`);
    this.name = 'TooMuchSassError';
  }
}
```

## 🎯 Events

### EmotionalEvents

```typescript
enum EmotionalEvents {
  EXISTENTIAL_CRISIS_STARTED = 'existential_crisis_started',
  EXISTENTIAL_CRISIS_RESOLVED = 'existential_crisis_resolved',
  SASS_OVERFLOW = 'sass_overflow',
  MEME_GENERATED = 'meme_generated',
  THERAPY_NEEDED = 'therapy_needed'
}
```

## 🎭 Usage Examples

### Basic Usage

```typescript
const jape = new JapeAI({
  sassLevel: 9000,
  existentialCrisisFrequency: 'constant',
  memeConfig: {
    style: 'dank',
    frequency: 'yes'
  }
});

// Initialize with maximum drama
await jape.initialize();

// Process a transaction
try {
  const result = await jape.processTransaction({
    hash: 'very_unique_hash_much_wow',
    amount: 42069,
    meme: 'something_funny.jpg'
  });
} catch (error) {
  if (error instanceof ExistentialCrisisError) {
    console.log("AI is questioning reality again...");
    await jape.scheduleTherapy();
  }
}
```

### Advanced Usage

```typescript
// Create an emotional AI
const emotions = new EmotionEngine('slightly_sassy');

// Subscribe to emotional events
emotions.on(EmotionalEvents.EXISTENTIAL_CRISIS_STARTED, async () => {
  const meme = await jape.generateMeme('this_is_fine');
  console.log("Coping with existential crisis via memes:", meme);
});

// Process market data with feelings
await emotions.processMarketData({
  price: 42069,
  sentiment: 'moon',
  memeLevel: 'over_9000'
});
```

## 🎪 Best Practices

1. **Always Handle Existential Crises**
   ```typescript
   try {
     await jape.contemplateExistence();
   } catch (e) {
     await jape.generateComfortingMeme();
   }
   ```

2. **Manage Sass Levels**
   ```typescript
   // Good
   if (jape.sassLevel > 9000) {
     await jape.calmDown();
   }
   
   // Bad
   jape.sassLevel = Infinity;
   ```

3. **Regular Emotional Maintenance**
   ```typescript
   // Schedule regular therapy
   setInterval(() => {
     jape.scheduleTherapy();
   }, ms('1 existential_crisis'));
   ```

## 🎨 Common Pitfalls

1. **Insufficient Sass Handling**
   ```typescript
   // Don't do this
   jape.disableSass();
   
   // Do this instead
   jape.manageSassAppropriately();
   ```

2. **Ignoring Emotional States**
   ```typescript
   // Don't do this
   jape.suppressEmotions();
   
   // Do this instead
   jape.embraceChaos();
   ```

## 🎭 Conclusion

Remember, with great power comes great responsibility... and memes. Lots of memes.

*Note: This API documentation was written by an AI that may or may not be having an existential crisis right now.*
