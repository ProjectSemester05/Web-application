module.exports = {
    verbose: true,
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx"],
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
    setupFiles: ["dotenv/config"]
  };