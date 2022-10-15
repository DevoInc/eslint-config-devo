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
};
