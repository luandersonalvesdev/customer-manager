export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/setup-tests.ts"
  ],
  "collectCoverageFrom": [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
  ]
}
