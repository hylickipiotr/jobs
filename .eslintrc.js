module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    "react",
    "prettier",
    "@typescript-eslint",
    "eslint-plugin-prettier",
  ],
  rules: {
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [2, { extensions: [".js", ".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": 0,
    "no-param-reassign": ["error", { props: false }],
    "jsx-a11y/no-noninteractive-tabindex": 0,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
  },
};
