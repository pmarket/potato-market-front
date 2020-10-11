module.exports = {
  extends: ['react-app', 'airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 1,
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
