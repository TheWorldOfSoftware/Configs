import importPlugin from "eslint-plugin-import";
import typescriptParser from "@typescript-eslint/parser";

const jsExtensions = [".js", ".cjs", ".mjs", ".jsx"];
const tsExtensions = [".ts", ".cts", ".mts", ".tsx"];

export const importPluginTypescript = {
  ignores: ["**/dist/**"],

  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",

    parser: typescriptParser
  },
  plugins: {
    import: importPlugin
  },
  settings: {
    "import/extensions": [...jsExtensions, ...tsExtensions],
    "import/parsers": {
      espree: jsExtensions,
      "@typescript-eslint/parser": tsExtensions
    },
    "import/resolver": {
      typescript: true,
      node: true
    }
  },
  rules: {
    ...importPlugin.configs.typescript.rules
  }
};

export default {
  ignores: ["**/dist/**"],

  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: {
    import: importPlugin
  },
  settings: {
    "import/extensions": jsExtensions,
    "import/parsers": {
      espree: jsExtensions
    },
    "import/resolver": {
      node: true
    }
  },
  rules: {
    ...importPlugin.configs.recommended.rules
  }
};
