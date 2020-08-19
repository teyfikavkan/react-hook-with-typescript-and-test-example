module.exports = {
    env: {
      browser: true,
      es2020: true,
      node: true,
      jest: true
    },
    extends: ['airbnb-typescript-prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 2,
      'no-empty-pattern': 1,
      'linebreak-style': 0,
      '@typescript-eslint/no-empty-interface': 1,
      'import/prefer-default-export': 1
    },
  };