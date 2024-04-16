module.exports = {
  env: {
    node: true,
    browser: true,
    es2022: true, // this sets the parserOptions.ecmaVersion option automagically
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    //  from @devo/eslint-config-logtrust-dashcope
    //Possible Errors:
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-constant-condition': ['error', { checkLoops: true }],
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', { allowEmptyCatch: false }],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    //"no-inner-declarations",
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    'no-template-curly-in-string': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'no-debugger': 'error',

    //Best practices
    'accessor-pairs': [
      'error',
      {
        getWithoutSet: false,
        setWithoutGet: true,
      },
    ],
    'consistent-return': 'error',
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
      },
    ],
    'class-methods-use-this': 'error',
    'dot-notation': 'error',
    'no-alert': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-caller': 'error',
    'no-extend-native': 'error',
    'no-fallthrough': 'error',
    'no-global-assign': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-octal': 'error',
    'no-redeclare': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    radix: 'error',
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: false }],
    'no-eval': 'error',
    'no-implied-eval': 'error',

    //Strict mode
    strict: 'error',

    //Variables
    'no-delete-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        varsIgnorePattern: '^__',
        args: 'none',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],

    //ES6
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-numeric-literals': 'error',

    //Style
    camelcase: ['error', { properties: 'always' }],
    'eol-last': ['error', 'always'],
    indent: [
      'error',
      2,
      {
        flatTernaryExpressions: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreUrls: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    // from @devo/eslint-config-devo-prettier
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
