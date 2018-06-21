const serveStatic = require('serve-static')

module.exports = {
  head: {
    title: 'Blog',
    titleTemplate: '%s :: DreaMinder',
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
  ],
  serverMiddleware: [
      { path: '/api/posts', handler: serveStatic(__dirname + '/api/posts.json') },
      { path: '/api/posts/post', handler: serveStatic(__dirname + '/api/post.json') }
  ]
}
