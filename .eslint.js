module.exports = {
  extends: [
    "@unbounce/eslint-config",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    project: ["tsconfig.json", "test/wdio/tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["react-hooks", "jsx-a11y"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/camelcase": [
      "error",
      { properties: "never", ignoreImports: true },
    ],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/ban-ts-ignore": 1,
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    camelcase: "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-shadow": ["error"],
  },
  settings: {
    react: {
      version: "16.13.1",
    },
  },
};
