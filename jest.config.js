module.exports = {
    verbose: true,
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx","css"],
    testPathIgnorePatterns: [
        "cypress"
    ],
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(react-s3)/)"
    ],
    moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/test/mocks/styleMock.js',
    },
    setupFiles: ["dotenv/config"]
  };