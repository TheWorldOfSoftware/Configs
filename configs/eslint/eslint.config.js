import { info } from "node:console";
import js from "./js.config.js";
import ts from "./ts.config.js";

const config = [js];

const typescript = await import("@typescript-eslint/eslint-plugin");
if (typescript.default) {
  info("Applying TypeScript-ESLint configuration.");
  config.push(ts);
}

export * as jsOverrides from "./js.config.js";
export * as tsOverrides from "./ts.config.js";

export default config;
export { js, ts };
