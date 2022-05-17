"use strict";
module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "prettier",
    "prettier/vue",
    "plugin:gridsome/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "warn",
    "gridsome/require-g-image-src": "error",
    "gridsome/require-g-link-to": "warn",
  },
};
