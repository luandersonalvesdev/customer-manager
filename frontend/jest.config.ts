export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/setup-tests.ts"
  ],
  testPathIgnorePatterns: [
    "src/__tests__/mocks/",
  ],
  "collectCoverageFrom": [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
  ]
}
