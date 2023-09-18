module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
      },
      "settings": {
        "react": {
          "version": "detect"
        }
      },
      "parser": "@typescript-eslint/parser",
      "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
      "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
      ],
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
      },
      "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
      },
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": [
          "warn",
          {
            "ignoreParameters": true
          }
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_",
            "caughtErrorsIgnorePattern": "^_"
          }
        ],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "no-param-reassign": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off"
      }
}