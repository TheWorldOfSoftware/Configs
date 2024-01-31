import importConfig from "./js.import.config.js";
import importPlugin from "eslint-plugin-import";
import typescriptParser from "@typescript-eslint/parser";

const extensions = [".js", ".cjs", ".mjs", ".ts", ".cts", ".mts"];

export default {
  files: extensions.map(extension => `~/**/*${extension}`),
  ignores: ["**/dist/**"],

  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",

    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: "latest"
    }
  },
  plugins: {
    import: importPlugin
  },
  settings: {
    "import/extensions": extensions,
    "import/parsers": {
      "@typescript-eslint/parser": extensions
    },
    "import/resolver": {
      node: true,
      typescript: true
    }
  },

  rules: {
    ...importConfig.rules,
    ...importPlugin.configs.typescript.rules
  }
};
