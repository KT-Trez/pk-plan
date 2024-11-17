import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node"
};

// noinspection JSUnusedGlobalSymbols
export default jestConfig;
