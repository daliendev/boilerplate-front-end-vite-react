module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' },
    'import/resolver': {
      alias: {
        map: [
          ['', './public']
        ],
      }
    }
 },
  plugins: ['react-refresh'],
  rules: {
    'no-console': 'warn',
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": [
          "vite.config.js"
        ]
      }
    ],
    'react/function-component-definition': [2, { "namedComponents": "arrow-function" }],
    'import/no-absolute-path': 0,
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
