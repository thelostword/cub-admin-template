/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
    }),
  },
  rules: {
    'no-bitwise': 0,
    'vue/multi-word-component-names': 0,
    'import/prefer-default-export': 0,
    'symbol-description': 0,
    'no-plusplus': 0,
    'import/no-unresolved': ['error', { ignore: ['^virtual:', '^~icons'] }],
    'import/extensions': ['error', { ignore: ['^~icons'] }],
  },
};
