module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/types/**/*.ts'
  ],
  coverageReporters: ['text', 'lcov', 'json', 'html'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
