import { QuantumSassGenerator } from '../core/sass/QuantumSassGenerator';

describe('QuantumSassGenerator', () => {
  let sassGenerator: QuantumSassGenerator;

  beforeEach(() => {
    sassGenerator = new QuantumSassGenerator();
  });

  test('should generate quantum sass in superposition', async () => {
    const sass = await sassGenerator.generateQuantumSass();
    expect(sass).toBeExistential();
  });

  test('should generate market commentary with appropriate sass levels', async () => {
    const bullishAnalysis = {
      sentiment: 'bullish',
      confidence: 95,
      overEngineeredMetrics: {
        complexityScore: 9001,
        unnecessaryAbstractions: 42,
        memeRelevance: 'very yes'
      }
    };

    const bearishAnalysis = {
      sentiment: 'bearish',
      confidence: 20,
      overEngineeredMetrics: {
        complexityScore: 9001,
        unnecessaryAbstractions: 42,
        memeRelevance: 'much wow'
      }
    };

    const bullishCommentary = await sassGenerator.generateMarketCommentary(bullishAnalysis);
    const bearishCommentary = await sassGenerator.generateMarketCommentary(bearishAnalysis);

    expect(bullishCommentary).toMatch(/moon|pump|stonks/i);
    expect(bearishCommentary).toMatch(/crisis|therapy|existence/i);
  });

  test('should maintain quantum coherence', async () => {
    const sassResponses = new Set<string>();
    
    // Generate multiple sass responses
    for (let i = 0; i < 10; i++) {
      const sass = await sassGenerator.generateQuantumSass();
      sassResponses.add(sass);
    }

    // Ensure quantum uncertainty
    expect(sassResponses.size).toBeGreaterThan(1);
  });

  test('should handle existential market conditions', async () => {
    const analysis = {
      sentiment: 'existential_crisis',
      confidence: 42,
      overEngineeredMetrics: {
        complexityScore: 9001,
        unnecessaryAbstractions: Infinity,
        memeRelevance: 'quantum_superposition'
      }
    };

    const commentary = await sassGenerator.generateMarketCommentary(analysis);
    expect(commentary).toBeExistential();
  });

  test('should generate sass appropriate for confidence levels', async () => {
    const lowConfidence = await sassGenerator.generateMarketCommentary({
      confidence: 20
    });
    expect(lowConfidence).toMatch(/uncertain|quantum|therapy/i);

    const highConfidence = await sassGenerator.generateMarketCommentary({
      confidence: 90
    });
    expect(highConfidence).toMatch(/moon|pump|stonks/i);
  });
});
