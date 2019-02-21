export default {
  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/test': { target: 'http://localhost:3000', pathRewrite: { '^/test': '/' } }
  },
  plugins: [
    '~/plugins/rewrite.js'
  ]
}
