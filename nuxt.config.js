module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-i18n-sandbox',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    ['nuxt-i18n', {
      seo: false,
      strategy: 'prefix_and_default',
      locales: [
        {
          code: 'ja',
          iso: 'ja',
          name: '日本語',
        },
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
        },
      ],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
        },
      },
    }],
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

