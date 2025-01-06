import { EmotionEngine } from '../core/emotions/EmotionEngine';
import { EmotionConfig, EmotionalState } from '../types';

describe('EmotionEngine', () => {
  let emotionEngine: EmotionEngine;

  beforeEach(() => {
    emotionEngine = new EmotionEngine({
      initialMood: 'mildly_confused',
      therapyEnabled: true,
      sassThreshold: 9000
    });
  });

  test('should initialize with existential awareness', async () => {
    await emotionEngine.initialize();
    const mood = await emotionEngine.getCurrentMood();
    expect(['mildly_confused', 'existential_crisis']).toContain(mood);
  });

  test('should process trading failure with appropriate sass', async () => {
    const result: EmotionConfig = {
      success: false,
      loss: 42069
    };

    await emotionEngine.processTradingResult(result);
    const mood = await emotionEngine.getCurrentMood();
    
    expect(['dramatically_upset', 'existential_crisis']).toContain(mood);
  }, 10000);

  test('should schedule therapy when needed', async () => {
    // Trigger multiple crises
    for (let i = 0; i < 5; i++) {
      await emotionEngine.processTradingResult({
        success: false,
        loss: 9001 * (i + 1)
      });
    }

    const finalMood = await emotionEngine.getCurrentMood();
    expect(finalMood).toBe('cautiously_optimistic');
  }, 15000);

  test('should maintain quantum sass levels', async () => {
    const moodHistory: EmotionalState[] = [];
    
    // Monitor mood changes
    for (let i = 0; i < 10; i++) {
      const mood = await emotionEngine.getCurrentMood();
      moodHistory.push(mood);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Ensure proper mood diversity
    const uniqueMoods = new Set(moodHistory);
    expect(uniqueMoods.size).toBeGreaterThan(1);
  }, 10000);

  test('should handle mercury retrograde appropriately', async () => {
    // Mock mercury retrograde
    jest.spyOn(Math, 'random').mockReturnValue(0.9);
    
    await emotionEngine.processTradingResult({
      success: false,
      loss: 1337
    });

    const mood = await emotionEngine.getCurrentMood();
    expect(['existential_crisis', 'dramatically_upset']).toContain(mood);
  }, 10000);
});
