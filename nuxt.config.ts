// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-vuefire',
    '@nuxt/fonts',
    '@nuxtjs/stylelint-module',
  ],
  ssr: false,
  css: ['~/assets/styles/main.css'],
  devServer: {
    port: 8080,
  },
  compatibilityDate: '2024-11-01',
  postcss: {
    plugins: {
      'autoprefixer': {},
      '@csstools/postcss-global-data': {
        files: ['assets/styles/settings/_theme.css'],
      },
      'postcss-custom-media': {},
      'postcss-apply-class': {},
      'postcss-nested': {},
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        commaDangle: 'always-multiline',
        braceStyle: '1tbs',
      },
    },
  },
  stylelint: {
    lintOnStart: false,
    include: ['**/*.{css,scss,sass,html,vue}'],
    exclude: ['node_modules/**', '.nuxt/**', 'dist/**'],
    config: {
      defaultSeverity: 'warning',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended',
        'stylelint-config-html/vue',
        'stylelint-config-recommended-vue',
      ],
      rules: {
        'declaration-block-no-duplicate-properties': true,
        'selector-pseudo-element-colon-notation': 'single',
        'comment-whitespace-inside': null,
        'comment-empty-line-before': null,
        'rule-empty-line-before': null,
        'selector-class-pattern': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'declaration-empty-line-before': [
          'never',
          {
            ignore: [
              'after-comment',
              'after-declaration',
            ],
          },
        ],
        'max-nesting-depth': [
          3,
          {
            ignore: [
              'pseudo-classes',
              'blockless-at-rules',
            ],
          },
        ],
      },
    },
  },
  vuefire: {
    config: {
      apiKey: 'AIzaSyA7cSUP7QjTwSuoXRQA8x3-xVg369RmskU',
      authDomain: 'janmichek-4e7de.firebaseapp.com',
      databaseURL: 'https://janmichek-4e7de.firebaseio.com',
      projectId: 'janmichek-4e7de',
      storageBucket: 'janmichek-4e7de.firebasestorage.app',
      messagingSenderId: '478725404100',
      appId: '1:478725404100:web:ff57825fce289b365b2091',
      measurementId: 'G-NDPRQR7R6M',
    },
  },
})
