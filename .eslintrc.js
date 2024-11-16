module.exports = {
  extends: [
    'expo',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: [
        'libs/**/*.ts,*.js',
        'styles/**/*.js',
        'components/**/*.ts,*.js,*.tsx,*.jsx',
        'app/**/*.tsx',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
