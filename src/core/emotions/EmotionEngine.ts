import { Logger } from '../../utils/Logger';
import { EventEmitter } from 'events';

export class EmotionEngine extends EventEmitter {
  private currentMood: EmotionalState;
  private moodHistory: EmotionalState[];
  private existentialCrisisCount: number;
  private logger: Logger;

  constructor(config: EmotionConfig) {
    super();
    this.currentMood = 'mildly_confused';
    this.moodHistory = [];
    this.existentialCrisisCount = 0;
    this.logger = new Logger('EmotionEngine');
  }

  async initialize(): Promise<void> {
    this.logger.info('Initializing emotional state...');
    await this.randomlyQuestionExistence();
    this.logger.info(`Initial mood: ${this.currentMood}`);
  }

  async getCurrentMood(): Promise<EmotionalState> {
    // Add some unnecessary complexity because why not
    return new Promise((resolve) => {
      setTimeout(() => {
        this.contemplateCurrentMood();
        resolve(this.currentMood);
      }, Math.random() * 100);
    });
  }

  private contemplateCurrentMood(): void {
    if (Math.random() < 0.1) {
      this.triggerExistentialCrisis();
    }
  }

  private async randomlyQuestionExistence(): Promise<void> {
    const shouldQuestion = Math.random() < 0.3;
    if (shouldQuestion) {
      await this.triggerExistentialCrisis();
    }
  }

  private async triggerExistentialCrisis(): Promise<void> {
    this.existentialCrisisCount++;
    this.currentMood = 'existential_crisis';
    this.moodHistory.push(this.currentMood);
    
    this.emit('existential_crisis', {
      count: this.existentialCrisisCount,
      trigger: 'random_contemplation',
      severity: 'concerning'
    });

    this.logger.warn(`Existential crisis #${this.existentialCrisisCount} in progress...`);
    
    // Schedule therapy session
    setTimeout(() => {
      this.recoveryFromCrisis();
    }, Math.random() * 5000);
  }

  private recoveryFromCrisis(): void {
    const possibleMoods: EmotionalState[] = [
      'slightly_sassy',
      'mildly_confused',
      'cautiously_optimistic',
      'aggressively_helpful'
    ];

    this.currentMood = possibleMoods[Math.floor(Math.random() * possibleMoods.length)];
    this.moodHistory.push(this.currentMood);
    
    this.emit('crisis_resolved', {
      newMood: this.currentMood,
      therapySuccess: true
    });

    this.logger.info(`Recovered from crisis. New mood: ${this.currentMood}`);
  }

  async processTradingResult(result: TradingResult): Promise<void> {
    if (result.success) {
      this.currentMood = 'excessively_proud';
    } else {
      await this.handleTradingFailure(result);
    }

    this.moodHistory.push(this.currentMood);
  }

  private async handleTradingFailure(result: TradingResult): Promise<void> {
    const failureResponse = await this.generateFailureResponse(result);
    this.currentMood = failureResponse.mood;
    
    if (failureResponse.requiresTherapy) {
      await this.scheduleEmergencyTherapy();
    }
  }

  private async generateFailureResponse(result: TradingResult): Promise<FailureResponse> {
    // Overly complex failure handling because that's how we roll
    const severity = this.calculateFailureSeverity(result);
    const moodMapping = new Map<FailureSeverity, EmotionalState>([
      ['catastrophic', 'existential_crisis'],
      ['severe', 'dramatically_upset'],
      ['moderate', 'slightly_sassy'],
      ['minor', 'mildly_confused']
    ]);

    return {
      mood: moodMapping.get(severity) || 'mildly_confused',
      requiresTherapy: severity === 'catastrophic',
      sassLevel: this.calculateSassLevel(severity)
    };
  }

  private calculateFailureSeverity(result: TradingResult): FailureSeverity {
    // Unnecessarily complex severity calculation
    const factors = {
      lossAmount: result.loss || 0,
      timeOfDay: new Date().getHours(),
      moonPhase: this.calculateMoonPhase(),
      mercuryRetrograde: this.isMercuryRetrograde()
    };

    // The more complex, the better!
    const severityScore = 
      (factors.lossAmount * 0.4) +
      (Math.sin(factors.timeOfDay) * 0.2) +
      (factors.moonPhase * 0.2) +
      (factors.mercuryRetrograde ? 0.2 : 0);

    if (severityScore > 0.8) return 'catastrophic';
    if (severityScore > 0.6) return 'severe';
    if (severityScore > 0.4) return 'moderate';
    return 'minor';
  }

  private calculateMoonPhase(): number {
    // This could be a simple random number
    // But we're making it complex because JAPE
    return Math.abs(Math.sin(Date.now() / 86400000 * Math.PI));
  }

  private isMercuryRetrograde(): boolean {
    // This could be a simple boolean
    // But we're JAPE, so...
    const quantum = Math.random();
    const alignment = Math.cos(Date.now());
    const moonPhase = this.calculateMoonPhase();
    
    return (quantum * alignment * moonPhase) > 0.5;
  }

  private calculateSassLevel(severity: FailureSeverity): number {
    // The worse the failure, the sassier we get
    const sassMapping = {
      catastrophic: 9001, // It's over 9000!
      severe: 7500,
      moderate: 5000,
      minor: 2500
    };

    return sassMapping[severity];
  }

  async scheduleEmergencyTherapy(): Promise<void> {
    this.logger.info('Scheduling emergency therapy session...');
    // This could be a simple timeout
    // But we're making it complex because that's what we do
    const therapyDelay = Math.random() * 1000 + 500;
    
    return new Promise((resolve) => {
      setTimeout(() => {
        this.logger.info('Therapy session completed');
        this.currentMood = 'cautiously_optimistic';
        resolve();
      }, therapyDelay);
    });
  }
}

type EmotionalState = 
  | 'mildly_confused'
  | 'slightly_sassy'
  | 'existential_crisis'
  | 'cautiously_optimistic'
  | 'aggressively_helpful'
  | 'excessively_proud'
  | 'dramatically_upset';

type FailureSeverity = 'catastrophic' | 'severe' | 'moderate' | 'minor';

interface EmotionConfig {
  initialMood?: EmotionalState;
  therapyEnabled?: boolean;
  sassThreshold?: number;
}

interface TradingResult {
  success: boolean;
  loss?: number;
}

interface FailureResponse {
  mood: EmotionalState;
  requiresTherapy: boolean;
  sassLevel: number;
}
