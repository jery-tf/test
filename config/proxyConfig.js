/**
 * Created by wyg on 2017/9/30.
 */
module.exports = {
  proxy: {
    '/proxy': {
      target: 'http://222.240.80.61/gateway',
      changeOrigin: true,
      pathRewrite: {
        '^/proxy': ''
      }
    }
  }
}
