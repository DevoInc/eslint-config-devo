const utils = require('./src/utils');

module.exports = {
  env: utils.env,
  extends: [
    './src/base-config.js',
    './src/base-config-override.js',
    ...utils.eslintRecommendedExtendsArray,
    ...utils.reactRecommendedExtendsArray,
  ],
  settings: utils.reactSettings,
};
