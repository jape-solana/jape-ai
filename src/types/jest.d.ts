declare namespace jest {
  interface Matchers<R> {
    toBeExistential(): R;
    toHaveSufficientSass(): R;
  }
}
