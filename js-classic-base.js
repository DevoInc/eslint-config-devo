module.exports = {
  env: {
    browser: true,
    jquery: true,
    node: true,
    mocha: true,
    jest: true,
    es2022: true, // this sets the parserOptions.ecmaVersion option automagically
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      jsx: true,
    },
    allowImportExportEverywhere: true,
  },
  extends: ['./src/base-config.js'],
};
