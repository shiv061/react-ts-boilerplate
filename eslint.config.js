module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Enables JSX syntax
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier', // Integrates with Prettier for code formatting
  ],
  rules: {
    // Custom rules
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'prettier/prettier': 'error', // Enforce Prettier rules as ESLint errors,
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['node_modules/', 'dist/'], // Folders to ignore
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
