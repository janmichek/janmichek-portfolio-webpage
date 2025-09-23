import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ['**/dist', '**/.nuxt', '**/.output'],
  rules: {
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@stylistic/max-statements-per-line': 'off',

    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',

    'camelcase': [
      'error',
      {
        properties: 'never',
      },
    ],

    'import/no-named-as-default-member': 'off',
    'import/named': 'off',
    'import/no-named-as-default': 'off',
    'import/default': 'off',

    'vue/require-v-for-key': 'error',
    'vue/no-v-html': 0,
    'vue/object-curly-spacing': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-multiple-template-root': 'off',
    'vue/require-default-prop': 'off',

    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      },
    ],

    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: false,
      },
    ],

    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],

    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'a', 'span', 'app-link', 'router-link'],
        allowEmptyLines: false,
      },
    ],

    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never',
      },
    ],

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
})
