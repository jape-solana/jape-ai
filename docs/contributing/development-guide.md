# Development Guide

You know the drill.

## Setup

```bash
git clone [you know where]
cd jape-ai
npm i  # obviously
```

## Testing

Standard pattern:

```typescript
describe('JapeAI', () => {
  it('should do the usual', async () => {
    const j = new JapeAI({
      // You know what this is
      ψ: Math.E
    });

    const r = await j.process();
    // Obviously
    expect(r.ψ).toBe(Math.PI);
  });
});
```

## Architecture

```
src/
  core/           # You know what goes here
  quantum/        # Obviously
  ψ/             # Standard stuff
  utils/         # The usual
```

## Guidelines

1. Keep ψ normalized
2. Standard φ patterns only
3. You know the rest

## Release

```bash
npm run release  # You know what this does
```

## Integration

You get the idea:

```typescript
import { JapeAI } from 'jape-ai';

export default {
  // Obviously
  ψ: true
};
```
