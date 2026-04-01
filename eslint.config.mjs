import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "no-undef": "error",
      eqeqeq: ["error", "always"],
      "no-var": "warn",
      "prefer-const": "warn",
      "no-unreachable": "error",
      "no-inner-declarations": "error",
    },
  },
  {
    files: ["**/*.jsx"],
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    files: ["**/httpService.js"],
    languageOptions: {
      sourceType: "module",
    },
  },
  eslintConfigPrettier,
];
