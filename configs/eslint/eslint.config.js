import { info } from "node:console";
import js from "./js.config.js";
import importPlugin from "./plugins/import/js.import.config.js";

const config = [js, importPlugin];

try {
  await import("typescript");
  info("Applying TypeScript configurations.");
  const [ts, importPluginTypescript] = Promise.all([
    await import("./ts.config.js"),
    await import("./plugins/import/ts.import.config.js")
  ]);
  config.push(ts.default, importPluginTypescript.default);
} catch {}

export default config;
