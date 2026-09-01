// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    'nuxt-aos',
    '@nuxtjs/sitemap',
  ],
  ssr: true,
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'canonical', href: 'https://janmichek.cz/' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/webp',
          href: '/profile-pic.webp',
        },
      ],
    },
  },
  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/utilities/_grid.css',
  ],
  site: {
    url: 'https://janmichek.cz',
    name: 'Jan Michek',
  },
  routeRules: {
    '/': { prerender: true, headers: { Vary: 'Accept' } },
    '/gallery': { headers: { Vary: 'Accept' } },
    '/git-flow': { headers: { Vary: 'Accept' } },
    '/karabiner': { headers: { Vary: 'Accept' } },
    '/tech-links': { headers: { Vary: 'Accept' } },
    '/webdesign-checklist': { headers: { Vary: 'Accept' } },
  },
  devServer: {
    port: 8080,
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  postcss: {
    plugins: {
      'autoprefixer': {},
      '@csstools/postcss-global-data': {
        files: ['assets/styles/settings/_theme.css'],
      },
      'postcss-custom-media': {},
      'postcss-nested': {},
    },
  },
  aos: {
    duration: 300,
    offset: 10,
    once: true,
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
  sitemap: {
    zeroRuntime: true,
    exclude: ['/preview/**'],
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    // Ensure homepage has higher priority; merged with auto-discovered routes
    urls: [
      {
        loc: '/',
        priority: 1,
        changefreq: 'monthly',
      },
    ],
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
})
