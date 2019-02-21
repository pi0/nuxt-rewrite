export default {
  proxy: {
    '/test': { target: 'http://localhost:3000', pathRewrite: { '^/test': '/' } }
  },
  modules: [
    '@nuxtjs/proxy',
    require('..')
  ]
}
