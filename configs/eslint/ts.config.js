import tsESLint from "typescript-eslint";

const memberOrdering = {
  default: {
    order: "alphabetically"
  },

  classes: {
    memberTypes: [
      // Static Fields
      ["#private-static-field", "#private-static-get", "#private-static-set"],
      ["private-static-field", "private-static-get", "private-static-set"],
      [
        "protected-static-field",
        "protected-static-get",
        "protected-static-set"
      ],
      ["public-static-field", "public-static-get", "public-static-set"],

      // Instance fields
      [
        "#private-instance-field",
        "#private-instance-get",
        "#private-instance-set"
      ],
      [
        "private-instance-field",
        "private-instance-get",
        "private-instance-set"
      ],
      [
        "protected-instance-field",
        "protected-instance-get",
        "protected-instance-set"
      ],
      ["public-instance-field", "public-instance-get", "public-instance-set"],

      // Static initialization
      "static-initialization",

      // Index signature
      "signature",
      "call-signature",

      // Constructors"
      "constructor",

      // Static Methods
      "#private-static-method",
      "private-static-method",
      "protected-static-method",
      "public-static-method",

      // Instance Methods
      "#private-instance-method",
      "private-instance-method",
      "protected-instance-method",
      "public-instance-method",
      "abstract-instance-method"
    ]
  },
  interfaces: {
    memberTypes: ["field", "signature", "constructor", "method"]
  },
  typeLiterals: {
    memberTypes: ["field", "signature", "constructor", "method"]
  }
};
const namingConvention = [
  {
    selector: "default",

    format: ["camelCase"],
    leadingUnderscore: "forbid",
    trailingUnderscore: "forbid"
  },
  {
    modifiers: ["private"],
    selector: "property",

    format: ["camelCase"],
    leadingUnderscore: "allow"
  },
  {
    selector: "typeLike",

    format: ["PascalCase"]
  },
  {
    selector: "variableLike",

    format: ["camelCase"],
    leadingUnderscore: "allow"
  },
  {
    selector: "import",

    format: ["camelCase", "PascalCase", "UPPER_CASE"]
  }
];

export default {
  files: ["~/**/*.ts", "~/**/*.cts", "~/**/*.mts"],
  ignores: ["**/dist/**"],

  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",

    parser: tsESLint.parser,
    parserOptions: {
      project: true
    }
  },
  plugins: {
    "@typescript-eslint": tsESLint.plugin
  },
  rules: {
    ...tsESLint.configs.eslintRecommended.rules,
    ...tsESLint.configs.strictTypeChecked.rules,

    // Supported Rules
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-ordering": ["error", memberOrdering],
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/naming-convention": ["error", ...namingConvention],
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/parameter-properties": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-find": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",

    // Disable ESLint JavaScript rules
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "default-param-last": "off",
    "init-declarations": "off",
    "no-invalid-this": "off",
    "no-loop-func": "off",
    "no-magic-numbers": "off",
    "no-restricted-imports": "off",
    "no-return-await": "off",
    "no-shadow": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "off",
    "prefer-destructuring": "off",

    // Extension Rules
    "@typescript-eslint/class-methods-use-this": "warn",
    "@typescript-eslint/consistent-return": "warn",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/init-declarations": "warn",
    "@typescript-eslint/no-loop-func": "warn",
    "@typescript-eslint/no-magic-numbers": "warn",
    "@typescript-eslint/no-restricted-imports": [
      "warn",
      { paths: bannedImports, patterns: bannedImportPatterns }
    ],
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/prefer-destructuring": "warn",
    "@typescript-eslint/return-await": "error",

    // Stylistic Rules
    "@typescript-eslint/no-empty-interface": [
      "error",
      { allowSingleExtends: true }
    ]
  }
};
