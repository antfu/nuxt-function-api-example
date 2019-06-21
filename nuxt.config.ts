import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ]
  },
  plugins: [
    './plugins/vue-function-api'
  ],
  modules: [
    '@nuxtjs/eslint-module'
  ]
}

export default config
