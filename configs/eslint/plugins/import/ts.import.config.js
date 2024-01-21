import typescriptParser from "@typescript-eslint/parser";

const extensions = [".ts", ".cts", ".mts", ".tsx"];

export default {
  files: extensions.map(extension => `**/*${extension}`),
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
      typescript: true
    }
  },
  rules: {
    ...importPlugin.configs.typescript.rules
  }
};
