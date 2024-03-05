module.exports = {
  extends: ['next', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-console': 1,
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
