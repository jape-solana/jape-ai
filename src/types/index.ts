export interface EmotionConfig {
  initialMood: EmotionalState;
  therapyEnabled: boolean;
  sassThreshold?: number;
}

export interface MemeConfig {
  dankness: number;
  templates?: string[];
  existentialCrisisEnabled?: boolean;
}

export type EmotionalState = 
  | 'mildly_confused'
  | 'existential_crisis'
  | 'dramatically_upset'
  | 'cautiously_optimistic'
  | 'quantum_superposition';

export interface ProcessingResult {
  success: boolean;
  sass: string;
  meme: string;
  sassLevel: number;
}

export interface Analysis {
  sentiment: string;
  confidence: number;
  overEngineeredMetrics: {
    complexityScore: number;
    unnecessaryAbstractions: number;
    memeRelevance: string;
  };
  meme?: string;
  sass?: string;
  existentialCrisis?: boolean;
}

export interface MarketAnalysis extends Analysis {
  pair: {
    base: string;
    quote: string;
  };
  quantumProbability: number;
  mercuryRetrograde: boolean;
}
