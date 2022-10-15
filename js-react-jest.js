const utils = require('./src/utils');

module.exports = {
  extends: ['./js-react', ...utils.jestRecommendedExtendsArray],
};
