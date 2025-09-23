// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', 'nuxt-vuefire', '@nuxt/fonts'],
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
        files: ['assets/styles/settings/_variables.css'],
      },
      'postcss-custom-media': {},
      'postcss-import': {},
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
