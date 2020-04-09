module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "jest": {
    "setupFilesAfterEnv": ["<rootDir>src/setupTests.js"]
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
};