module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:@ota-meshi/svelte/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'svelte3/named-blocks': true,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'svelte3',
    'prettier',
    'unused-imports',
    'json-format',
  ],
  ignorePatterns: ['node_modules/', '*.cjs', 'svelte.config.js', 'vite.config.ts'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // It's not accurate in the monorepo style
    'import/no-extraneous-dependencies': 'off',
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L139
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
