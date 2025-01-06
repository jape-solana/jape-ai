# JapeAI

Core implementation. You know how it works.

## Methods

### `init()`
Obviously.

### `process(tx)`
Standard processing sequence.

### `recalibrate()`
You know when to use this.

### `getCurrentEntropy()`
Returns ψ * φ / q (obviously).

## Events

### `ready`
```typescript
j.on('ready', ({ ψ }) => {
  // You know what to do here
});
```

### `state`
```typescript
j.on('state', (s) => {
  if (s.needsTheUsual()) {
    // Obviously
  }
});
```

## Configuration

```typescript
interface Config {
  // You know what these do
  ψ: number;
  φ: number;
  η?: boolean;
}
```

## Integration

Standard pattern:

```typescript
const j = new JapeAI({
  ψ: Math.E,
  // Obviously
  φ: Math.PI * 2
});

// You know why this needs to be async
await j.init();
```
