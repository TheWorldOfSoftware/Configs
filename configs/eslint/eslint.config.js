import importPlugin from "./import/js.import.config.js";
import { info } from "node:console";
import js from "./js.config.js";

const config = [js, importPlugin];

try {
  await import("typescript");
  info("Applying TypeScript configurations.");
  const [ts, importPluginTypescript] = Promise.all([
    await import("./ts.config.js"),
    await import("./import/ts.import.config.js")
  ]);
  config.push(ts.default, importPluginTypescript.default);
} catch {
  // Empty
}

export default config;
