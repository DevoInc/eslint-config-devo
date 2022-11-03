const utils = require('./src/utils');

module.exports = {
  env: utils.env,
  // parserOptions sourceType: 'module' already added by @typescript-eslint/recommended
  extends: [
    './src/base-config.js',
    './src/base-config-override.js',
    ...utils.eslintRecommendedExtendsArray,
    ...utils.typescriptRecommendedExtendsBaseArray,
    ...utils.reactRecommendedExtendsArray,
  ],
  settings: utils.reactSettings,
  rules: {
    // Note: you must disable the no-shadow base rule as it can report incorrect errors
    // https://typescript-eslint.io/rules/no-shadow/#how-to-use
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
  },
};
