module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': ['error', { allow: ['__dirname', '__filename', '_id'] }],
    'no-unused-vars': ['warn', {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^(req|res|next)$',
    }],
    'import/extensions': 'off',
  },
};
