import importConfig from "./js.import.config.js";
import importPlugin from "eslint-plugin-import";
import tsESLint from "typescript-eslint";

const extensions = [".js", ".cjs", ".mjs", ".ts", ".cts", ".mts"];

export default {
  files: extensions.map(extension => `~/**/*${extension}`),
  ignores: ["**/dist/**"],

  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",

    parser: tsESLint.parser,
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
      "@typescript-eslint/parser": tsESLint.parser
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
