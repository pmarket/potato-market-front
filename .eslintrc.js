module.exports = {
  extends: ['react-app', 'airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'no-alert': 'off',
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-wrap-multilines': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
