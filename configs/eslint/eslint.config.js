import js, { bannedKeywords } from "./js.config.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const permittedKeywords = ["default"];

export default [
  ...js,
  {
    files: [
      path.relative(
        path.dirname("."),
        path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "./ts.config.js"
        )
      )
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
