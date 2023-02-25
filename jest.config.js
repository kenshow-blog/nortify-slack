export const roots = ["<rootDir>/test"];
export const transform = {
  "^.+\\.tsx?$": "ts-jest",
};
export const testMatch = ["**/?(*-)+(spec|test).[jt]s?(x)"];
export const moduleFileExtensions = ["ts", "tsx", "js", "jsx", "json", "node"];
export const testEnvironment = "node";
