module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    // General & JS
    camelcase: 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    // React
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-bind': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx'],
      },
    ],
    'react/jsx-key': 'warn',
    // Proptypes
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
  },
};
