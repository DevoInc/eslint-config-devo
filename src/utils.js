const typescriptRecommendedExtendsBaseArray = [
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
];

const reactRecommendedExtendsArray = [
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
];

const prettierRecommendedExtendsArray = ['plugin:prettier/recommended'];

const eslintRecommendedExtendsArray = ['eslint:recommended'];

const newJsxExtendsArray = ['plugin:react/jsx-runtime'];

const jestRecommendedExtendsArray = [
  'plugin:jest/recommended',
  'plugin:jest/style',
];

const reactSettings = {
  react: {
    version: 'detect',
  },
};

module.exports = {
  eslintRecommendedExtendsArray,
  typescriptRecommendedExtendsBaseArray,
  jestRecommendedExtendsArray,
  reactRecommendedExtendsArray,
  prettierRecommendedExtendsArray,
  newJsxExtendsArray,
  reactSettings,
};
