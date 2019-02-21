const path = require('path')

module.exports = function () {
  this.addPlugin({
    src: path.resolve(__dirname, 'rewrite.js'),
    fileName: 'rewrite.js'
  })
}
