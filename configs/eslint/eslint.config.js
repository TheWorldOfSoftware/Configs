import { info } from "node:console";
import js from "./js.config.js";
import ts from "./ts.config.js";
import importPlugin, {
  importPluginTypescript
} from "./plugins/import.config.js";

const config = [js, importPlugin];

const typescriptPlugin = await import("@typescript-eslint/eslint-plugin");
if (typescriptPlugin.default) {
  info("Applying TypeScript-ESLint configuration.");
  config.push(ts, importPluginTypescript);
}

export * as jsOverrides from "./js.config.js";
export * as tsOverrides from "./ts.config.js";

export default config;
export { js, ts };
