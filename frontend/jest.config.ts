export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/setup-tests.ts"
  ],
  testPathIgnorePatterns: [
    "src/__tests__/mocks/",
  ],
  coveragePathIgnorePatterns: [
    "src/__tests__/mocks/",
    "src/utils/",
    "src/services/",
    "src/interfaces",
    "src/main.tsx",
    "src/vite-env.d.ts"
  ],
  "collectCoverageFrom": [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
  ]
}
