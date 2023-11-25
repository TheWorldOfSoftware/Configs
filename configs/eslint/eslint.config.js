import js, { bannedKeywords } from "./js.config.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

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

const [typescript, ts] = await Promise.all([
  import("typescript"),
  import("./ts.config.js")
]);
if (typescript.default) {
  config.push(...ts.default);
}

export default config;
