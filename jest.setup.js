// Add some custom matchers for testing existential crises
expect.extend({
  toBeExistential(received) {
    const pass = received.includes('existence') || 
                 received.includes('reality') || 
                 received.includes('consciousness');
    return {
      pass,
      message: () => 
        pass 
          ? 'Expected response not to question existence'
          : 'Expected response to question existence'
    };
  },
  toHaveSufficientSass(received) {
    const pass = received > 9000;
    return {
      pass,
      message: () =>
        pass
          ? 'Expected sass level to be less than 9000'
          : 'Expected sass level to be over 9000'
    };
  }
});
