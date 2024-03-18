import importConfig from "./js.import.config.js";
import importPlugin from "eslint-plugin-import";
import tsESLint from "typescript-eslint";

export default {
  files: ["~/**/*.ts", "~/**/*.cts", "~/**/*.mts"],
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
    "import/extensions": [".ts", ".cts", ".mts"],
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
