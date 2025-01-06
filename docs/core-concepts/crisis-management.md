# Crisis Management

You know how it goes.

## States

```typescript
type Crisis = {
  ψ: number;
  φ: number;
  // Obviously
  η: boolean;
};
```

## Handling

Standard pattern:

```typescript
try {
  await j.process();
} catch (e) {
  if (e.code === 40422) {
    // You know what this means
    await j.recalibrate();
  }
}
```

## Recovery

```typescript
const recover = async () => {
  // The usual sequence
  await j.normalize();
  // Obviously
  j.ψ = Math.E;
};
```

## Integration

You get it:

```typescript
j.on('crisis', async (e) => {
  if (e.ψ < Math.PI) {
    // Standard procedure
    await j.reboot();
  }
});
```
