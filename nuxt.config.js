const pkg = require('./package')

module.exports = {
  mode: 'universal',

  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    STRIPE_PUBLIC_KEY: 'pk_live_XeDPhYkJZL7lGfNCwpEhjk0D'
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'donation',
        path: '/donate/*',
        component: resolve(__dirname, 'pages/donate/index.vue'),
        props: false
      })
    }
  },

  generate: {
    fallback: '404.html'
  },
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://js.stripe.com/v3/' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: ['@/assets/styles/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios'
    // '@nuxtjs/pwa',
    // 'nuxtdown'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
