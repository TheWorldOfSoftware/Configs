import importPlugin from "eslint-plugin-import";

const extensions = [".js", ".cjs", ".mjs", ".jsx"];

export default {
  files: extensions.map(extension => `**/*${extension}`),
  ignores: ["**/dist/**"],

  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
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
      espree: extensions
    },
    "import/resolver": {
      node: true
    }
  },
  rules: {
    ...importPlugin.configs.recommended.rules,
    // Helpful warnings
    "import/no-deprecated": "warn",
    "import/no-empty-named-blocks": "warn",
    "import/no-extraneous-dependencies": ["warn", { devDependencies: false }],
    "import/no-mutable-exports": "warn",
    "import/no-unused-modules": ["warn", { missingExports: true }],

    // Module systems
    "import/no-amd": "error",
    "import/no-commonjs": "error",
    "import/no-import-module-exports": "error",
    "import/no-nodejs-modules": "off",
    "import/unambiguous": "error",

    // Static analysis
    "import/no-absolute-path": "error",
    "import/no-cycle": "error",
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": ["error", { allow: ["**/util/**/*"] }],
    "import/no-relative-packages": "error",
    "import/no-relative-parent-imports": "error",
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            target: "src/*/**/*",
            from: "src/*",
            message: "Do not access application files from logic!"
          },
          {
            target: "src/features/**/*",
            from: "src/routes/**/*",
            message: "Do not access routes from feature functionality!"
          },
          {
            target: "src/lib/**/*",
            from: "src/!(lib)/**/*",
            message: "Lib files cannot access application logic!"
          },
          {
            target: "src/models/**/*",
            from: [
              "src/features/**/*",
              "src/repositories/**/*",
              "src/routes/**/*"
            ],
            message: "Do not access logic from a data model!"
          },
          {
            target: "src/repositories/**/*",
            from: ["src/features/**/*", "src/routes/**/*"],
            message: "Do not access logic from a repository!"
          },
          {
            target: "src/routes/**/*",
            from: "src/repositories/**/*",
            message: "Do not access repositories directly!"
          },
          {
            target: "src/types/**/*",
            from: "src/**/*",
            except: ["src/models/**/*", "src/types/**/*"],
            message: "Do not access logic from type definitions!"
          }
        ]
      }
    ],
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/no-webpack-loader-syntax": "error"
  }
};
