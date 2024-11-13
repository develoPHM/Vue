module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'], // 홑따옴표 사용
    indent: ['error', 2], // 인덴트 2칸
    semi: ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/ban-ts-comment': 'off', // @ts-ignore 등의 주석 사용을 허용
  },
};
