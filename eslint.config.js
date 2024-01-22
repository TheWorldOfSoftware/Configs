import eslintConfig from "./configs/eslint/eslint.config.js";

export default [
  ...eslintConfig,
  {
    files: ["eslint.config.js"],
    rules: {
      "import/no-internal-modules": [
        "error",
        { allow: ["**/util/**", "configs/eslint/eslint.config.js"] }
      ]
    }
  },
  {
    files: ["configs/eslint/eslint.config.js"],
    rules: {
      "import/no-internal-modules": [
        "error",
        { allow: ["**/util/**", "plugins/**/*.config.js"] }
      ]
    }
  }
];
