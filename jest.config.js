// jest.config.js
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transforms JS and JSX files
  },
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mocks CSS imports
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/tests/__mocks__/fileMock.js", // Mocks image imports
    "^next/image$": "<rootDir>/tests/__mocks__/next/image.js", // Mock next/image
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  modulePathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
