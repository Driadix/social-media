module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
      ],
    }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-unused-vars': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [
          ['scenes', './src/scenes', 'components', './src/components'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
