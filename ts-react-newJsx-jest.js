const utils = require('./src/utils');

// React 17 new jsx. See: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
module.exports = {
  extends: ['./ts-react-newJsx', ...utils.jestRecommendedExtendsArray],
};
