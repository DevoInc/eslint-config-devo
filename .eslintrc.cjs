const utils = require('./src/utils');

module.exports = {
  env: utils.env,
  extends: [
    './src/base-config.js',
    ...utils.eslintRecommendedExtendsArray,
    ...utils.prettierRecommendedExtendsArray,
  ],
};
