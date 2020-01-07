module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "object-curly-spacing": [2, "always"],
    "array-bracket-spacing": [2, "always"],
    "computed-property-spacing": [2],
    "no-whitespace-before-property": [2],
    "comma-spacing": [2],
    "space-unary-ops": [2],
    "block-spacing": [2],
    "func-call-spacing": [2, "never"],
    "no-trailing-spaces": [2],
    "no-multi-spaces": [2],
    "no-unused-vars": [1],
    "no-irregular-whitespace": [2],
    "linebreak-style": [1, "unix"],
    "quotes": [2, "single"],
    "semi": [2, "never"]
  }
};