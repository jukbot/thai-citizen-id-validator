module.exports = {
  root: true,
  env: {
    'jest/globals': true,
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module'
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