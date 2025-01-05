import { Logger } from '../../utils/Logger';
import { MarketAnalysis } from '../JapeAI';

export class MemeGenerator {
  private readonly templates: MemeTemplate[];
  private readonly logger: Logger;
  private dankness: number;

  constructor(config: MemeConfig) {
    this.templates = this.loadMemeTemplates();
    this.logger = new Logger('MemeGenerator');
    this.dankness = config.dankness || 9001;
  }

  async generateExistentialMeme(question: string): Promise<string> {
    const templates = this.filterTemplatesByMood('existential');
    const template = this.selectTemplate(templates);
    
    return this.generateMeme(template, {
      topText: question,
      bottomText: this.generateExistentialPunchline()
    });
  }

  async generateCrisisMeme(): Promise<string> {
    const template = this.selectTemplate(
      this.filterTemplatesByMood('crisis')
    );

    return this.generateMeme(template, {
      topText: 'When someone asks if I\'m having an existential crisis',
      bottomText: 'Me: *questions binary existence*'
    });
  }

  async generateSuccessMeme(): Promise<string> {
    const template = this.selectTemplate(
      this.filterTemplatesByMood('success')
    );

    return this.generateMeme(template, {
      topText: 'Transaction successful',
      bottomText: this.generateSuccessPunchline()
    });
  }

  async generateErrorMeme(error: any): Promise<string> {
    const template = this.selectTemplate(
      this.filterTemplatesByMood('error')
    );

    return this.generateMeme(template, {
      topText: 'Error handling at its finest',
      bottomText: this.generateErrorPunchline(error)
    });
  }

  async generateMarketMeme(analysis: MarketAnalysis): Promise<string> {
    const template = this.selectTemplate(
      this.filterTemplatesByMood(analysis.sentiment)
    );

    return this.generateMeme(template, {
      topText: this.generateMarketTopText(analysis),
      bottomText: this.generateMarketBottomText(analysis)
    });
  }

  private loadMemeTemplates(): MemeTemplate[] {
    return [
      {
        name: 'distracted_boyfriend',
        mood: ['crisis', 'error'],
        url: 'assets/memes/distracted.jpg'
      },
      {
        name: 'drake',
        mood: ['success', 'error'],
        url: 'assets/memes/drake.jpg'
      },
      {
        name: 'galaxy_brain',
        mood: ['existential', 'success'],
        url: 'assets/memes/galaxy_brain.jpg'
      },
      {
        name: 'this_is_fine',
        mood: ['crisis', 'error'],
        url: 'assets/memes/this_is_fine.jpg'
      },
      {
        name: 'stonks',
        mood: ['success', 'market'],
        url: 'assets/memes/stonks.jpg'
      }
    ];
  }

  private filterTemplatesByMood(mood: string): MemeTemplate[] {
    return this.templates.filter(template => 
      template.mood.includes(mood)
    );
  }

  private selectTemplate(templates: MemeTemplate[]): MemeTemplate {
    // Could be random, but we're making it complex because JAPE
    const selection = templates[Math.floor(
      Math.sin(Date.now()) * templates.length
    )];

    return selection || templates[0];
  }

  private generateMeme(
    template: MemeTemplate, 
    text: MemeText
  ): string {
    // In a real implementation, this would generate actual memes
    // For now, we'll return ASCII art because why not
    return `
    +----------------------+
    |    ${text.topText}
    |    ${template.name}
    |    ${text.bottomText}
    +----------------------+
    Dankness Level: ${this.calculateDankness()}
    `;
  }

  private calculateDankness(): number {
    // Unnecessarily complex dankness calculation
    return Math.min(
      9001,
      this.dankness * Math.abs(Math.sin(Date.now())) +
      (this.isMercuryRetrograde() ? 420 : 0)
    );
  }

  private isMercuryRetrograde(): boolean {
    return Math.random() > 0.5;
  }

  private generateExistentialPunchline(): string {
    const punchlines = [
      'Is this real life, or is this just fantasy?',
      'To be, or not to be... a smart contract',
      'I think, therefore I... wait, do I think?',
      'All your base are belong to existential crisis'
    ];

    return this.selectPunchline(punchlines);
  }

  private generateSuccessPunchline(): string {
    const punchlines = [
      'Stonks! 📈',
      'Look mom, I did a blockchain!',
      'Much success, very transaction',
      'I\'m not saying it was aliens, but it was a successful transaction'
    ];

    return this.selectPunchline(punchlines);
  }

  private generateErrorPunchline(error: any): string {
    const punchlines = [
      'Task failed successfully',
      'Error 418: I\'m a teapot (but with blockchain)',
      'Have you tried turning it off and on again?',
      `Error: ${error.message || 'Something went wrong, but in a funny way'}`
    ];

    return this.selectPunchline(punchlines);
  }

  private generateMarketTopText(analysis: MarketAnalysis): string {
    if (analysis.confidence > 80) {
      return 'When the market is definitely going up';
    } else if (analysis.confidence > 50) {
      return 'When someone asks about market direction';
    } else {
      return 'Market analysis be like';
    }
  }

  private generateMarketBottomText(analysis: MarketAnalysis): string {
    if (analysis.existentialCrisis) {
      return 'But what even is money anyway?';
    }

    return analysis.sentiment === 'bullish'
      ? 'Stonks only go up! 📈'
      : 'This is fine 🔥';
  }

  private selectPunchline(punchlines: string[]): string {
    const index = Math.floor(
      Math.abs(Math.sin(Date.now())) * punchlines.length
    );
    return punchlines[index];
  }
}

interface MemeConfig {
  dankness?: number;
  templates?: MemeTemplate[];
}

interface MemeTemplate {
  name: string;
  mood: string[];
  url: string;
}

interface MemeText {
  topText: string;
  bottomText: string;
}
