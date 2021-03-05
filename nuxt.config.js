module.exports = {
  head: {
    title: 'DreaMinder',
    titleTemplate: '%s :: Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=.9' },
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=cyrillic' }
    ],
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'http://localhost:3000/api'
  },
  plugins: [
    '@/plugins/date'
  ]
}
