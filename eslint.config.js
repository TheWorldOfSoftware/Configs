import eslintConfig from "./configs/eslint/eslint.config.js";
import importPlugin from "eslint-plugin-import";

export default [
  ...eslintConfig,
  {
    files: ["eslint.config.js"],

    plugins: {
      import: importPlugin
    },
    rules: {
      "import/no-internal-modules": [
        "error",
        { allow: ["**/util/**", "configs/eslint/eslint.config.js"] }
      ]
    }
  },
  {
    files: ["configs/eslint/eslint.config.js"],

    plugins: {
      import: importPlugin
    },
    rules: {
      "import/no-internal-modules": [
        "error",
        { allow: ["**/util/**", "*/*.config.js"] }
      ]
    }
  }
];
