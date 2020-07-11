module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['prettier', '@typescript-eslint/eslint-plugin', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'import/extensions': 0,
    'prettier/prettier': ['error'],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
  },
};
