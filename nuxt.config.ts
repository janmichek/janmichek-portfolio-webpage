// https://nuxt.com/docs/api/configuration/nuxt-config
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { resolveSiteVariant } from './data/siteVariant'

const siteVariant = resolveSiteVariant(process.env.NUXT_PUBLIC_SITE_VARIANT)
const siteUrl = siteVariant === 'portfolio' ? 'https://portfolio.janmichek.cz' : 'https://janmichek.cz'

const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml
`

export default defineNuxtConfig({
  modules: [
    'nuxt-aos',
    '@nuxtjs/sitemap',
  ],
  ssr: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
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
          href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=DM+Serif+Text:ital@0;1&family=Figtree:wght@300..900&display=swap',
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
    url: siteUrl,
    name: 'Jan Michek',
  },
  runtimeConfig: {
    public: {
      siteVariant,
      siteUrl,
    },
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
  hooks: {
    'nitro:build:before': nitro => {
      nitro.hooks.hook('prerender:done', () => {
        writeFileSync(join(nitro.options.output.publicDir, 'robots.txt'), robots)
      })
    },
  },
  aos: {
    duration: 300,
    offset: 10,
    once: true,
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
})
