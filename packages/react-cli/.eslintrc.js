module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],

  // 0 = off, 1 = warn, 2 = error
  rules: {
    /**
     * typescript
     * */
    // handled by native accessibility features (private is stage 3)
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // returning undefined / void is fine.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // this rule does not make sense when usages are runtime.
    '@typescript-eslint/no-use-before-define': 'off',

    /**
     * general
     */
    // we need consoles in a console app.
    'no-console': 'warn',

    // handled by prettier
    'prettier/prettier': 'error',
    '@typescript-eslint/indent': 'off',
  },
  overrides: [
    // node / config files
    {
      files: [
        'test/**'
      ],
      rules: {
        // stuff exists in global namespace
        'no-undef': 'off'
      },
    }
  ]
};
