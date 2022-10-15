const utils = require('./src/utils');

module.exports = {
  extends: [
    './js-classic-base.js',
    ...utils.jestRecommendedExtendsArray,
    ...utils.reactRecommendedExtendsArray,
    ...utils.prettierRecommendedExtendsArray,
  ],
  settings: utils.reactSettings,
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-boolean-value': ['error', 'never'],
  },
};
