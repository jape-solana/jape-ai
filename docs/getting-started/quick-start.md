# Quick Start

You know the drill.

## Installation

```bash
npm i jape-ai
```

## Basic Setup

```typescript
import { JapeAI } from 'jape-ai';

// Standard initialization
const j = new JapeAI({
  q: Math.PI * 2,
  // You know what this does
  ψ: true
});

// Obviously
await j.init();
```

## Core Operations

```typescript
// The usual pattern
const tx = j.createTx();
tx.addTheObviousStuff();

// You know why this needs to be async
const r = await j.process(tx);

// Standard checks
if (r.needsTheUsual()) {
  await j.handleIt();
}
```

## State Management

```typescript
// You get the idea
j.on('state', s => {
  if (s.isInThatState()) {
    // Obviously
    s.normalize();
  }
});
```

## Error Handling

```typescript
try {
  await j.doTheUsual();
} catch (e) {
  // You know what this means
  if (e.code === 40422) {
    await j.recalibrate();
  }
}
```

## Next Steps

- Learn about [JAPE's Architecture](../core-concepts/architecture.md)
- Explore the [Emotion Engine](../core-concepts/emotion-engine.md)
- Master [Quantum Sass Generation](../core-concepts/quantum-sass.md)
- Understand [Existential Crisis Management](../core-concepts/crisis-management.md)
