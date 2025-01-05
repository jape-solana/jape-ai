export class Logger {
  private readonly context: string;
  private readonly emojis = {
    info: '💡',
    warn: '⚠️',
    error: '🚨',
    debug: '🔍',
    crisis: '😱'
  };

  constructor(context: string) {
    this.context = context;
  }

  info(message: string): void {
    this.log('info', message);
  }

  warn(message: string): void {
    this.log('warn', message);
  }

  error(message: string): void {
    this.log('error', message);
  }

  debug(message: string): void {
    this.log('debug', message);
  }

  crisis(message: string): void {
    this.log('crisis', message);
  }

  private log(level: keyof typeof this.emojis, message: string): void {
    const timestamp = new Date().toISOString();
    const emoji = this.emojis[level];
    
    console.log(
      `${emoji} [${timestamp}] [${this.context}] [${level.toUpperCase()}]: ${message}`
    );
  }
}
