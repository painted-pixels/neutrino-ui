module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  snapshotSerializers: ["enzyme-to-json"],
  setupFiles: ["<rootDir>/src/test/setup-tests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["**/src/**/__tests__/*.(ts|tsx)"],
};
