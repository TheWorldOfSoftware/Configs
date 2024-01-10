import js, { bannedKeywords } from "./js.config.js";
import { fileURLToPath } from "node:url";
import { info } from "node:console";
import path from "node:path";
import ts from "./ts.config.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const permittedKeywords = ["default"];

const config = [
  js,
  {
    files: [
      path.relative(path.dirname("."), path.resolve(dirname, "./ts.config.js"))
    ],
    rules: {
      "id-denylist": [
        "error",
        ...bannedKeywords.filter(
          keyword => !permittedKeywords.includes(keyword)
        )
      ]
    }
  }
];

const [typescript] = await Promise.all([
  await import("@typescript-eslint/eslint-plugin")
]);
if (typescript.default) {
  info("Applying TypeScript-ESLint configuration.");
  config.push(ts);
}

export * as jsOverrides from "./js.config.js";
export * as tsOverrides from "./ts.config.js";

export default config;
export { js, ts };
