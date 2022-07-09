module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ['prettier'],
  extends: ['@antfu/eslint-config', 'prettier'],
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'import/export': 'off',
    'antfu/if-newline': 'off'
  }
};
