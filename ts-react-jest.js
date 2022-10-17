const utils = require('./src/utils');

module.exports = {
  extends: ['./ts-react', ...utils.jestRecommendedExtendsArray],
};
