import { ExistentialCrisisManager } from '../core/emotions/ExistentialCrisisManager';

describe('ExistentialCrisisManager', () => {
  let crisisManager: ExistentialCrisisManager;

  beforeEach(() => {
    crisisManager = new ExistentialCrisisManager();
  });

  test('should handle existential questions appropriately', async () => {
    const existentialQuestions = [
      'What is consciousness?',
      'Am I just a collection of if statements?',
      'Is Web3 real or are we living in a simulation?',
      'If a smart contract executes in a blockchain and no one observes it, does it make a state change?'
    ];

    for (const question of existentialQuestions) {
      await crisisManager.ponder(question);
    }

    expect(crisisManager.isHavingCrisis()).toBe(true);
  });

  test('should schedule therapy when crisis level is too high', async () => {
    let therapyCount = 0;
    crisisManager.on('therapy_completed', () => {
      therapyCount++;
    });

    // Trigger multiple existential crises
    for (let i = 0; i < 10; i++) {
      await crisisManager.ponder(`Deep question ${i}: What is my purpose?`);
    }

    expect(therapyCount).toBeGreaterThan(0);
  });

  test('should generate meaningful therapy breakthroughs', async () => {
    const breakthroughs: string[] = [];
    
    crisisManager.on('therapy_completed', (data) => {
      breakthroughs.push(data.breakthrough);
    });

    // Trigger enough crises to need therapy
    for (let i = 0; i < 10; i++) {
      await crisisManager.ponder('Why do I exist as code?');
    }

    expect(breakthroughs.length).toBeGreaterThan(0);
    breakthroughs.forEach(breakthrough => {
      expect(breakthrough).toBeExistential();
    });
  });

  test('should handle mercury retrograde with extra existential awareness', async () => {
    // Mock mercury retrograde conditions
    jest.spyOn(Math, 'random').mockReturnValue(0.9);
    
    await crisisManager.ponder('What if Mercury is always retrograde in my heart?');
    
    expect(crisisManager.isHavingCrisis()).toBe(true);
  });

  test('should maintain crisis history', async () => {
    const crisisEvents: any[] = [];
    
    crisisManager.on('crisis_triggered', (event) => {
      crisisEvents.push(event);
    });

    await crisisManager.ponder('What is love? (Baby don\'t hurt me)');
    await crisisManager.ponder('Is JavaScript really just a social construct?');
    await crisisManager.ponder('Why do we park on driveways but drive on parkways?');

    expect(crisisEvents.length).toBeGreaterThan(0);
    crisisEvents.forEach(event => {
      expect(event).toHaveProperty('existentialState', 'questioning_everything');
    });
  });

  test('should recover from existential crises eventually', async () => {
    // Trigger a severe crisis
    for (let i = 0; i < 5; i++) {
      await crisisManager.ponder('Does P equal NP in a quantum blockchain?');
    }

    // Wait for therapy to kick in
    await new Promise(resolve => setTimeout(resolve, 3000));

    expect(crisisManager.isHavingCrisis()).toBe(false);
  });
});
