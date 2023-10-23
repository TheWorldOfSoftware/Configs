import js, { bannedKeywords } from "./js.config.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import ts from "./ts.config.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const permittedKeywords = ["default"];

const config = [
  ...js,
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

const typescript = await import("typescript");
if (typescript) {
  config.push(...ts);
}

export default config;
