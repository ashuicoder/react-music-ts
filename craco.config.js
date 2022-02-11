const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
  devServer: {
    port: 8080
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      cmp: resolve('src/components'),
      api: resolve('src/api'),
      assets: resolve('src/assets'),
      utils: resolve('src/utils')
    }
  }
}
