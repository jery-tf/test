/**
 * Created by wyg on 2017/9/30.
 */
module.exports = {
  proxy: {
    '/proxy': {
      target: 'http://172.17.32.102:30582',
      changeOrigin: true,
      pathRewrite: {
        '^/proxy': ''
      }
    }
  }
}
