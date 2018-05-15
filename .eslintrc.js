module.exports = {
  root: true,
  env: {
    'jest/globals': true,
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['jest'],
  extends: [
    'standard',
    'plugin:jest/recommended'
  ],
  rules: {
    'no-console': 'off'
  }
}