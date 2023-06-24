const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    'api1', createProxyMiddleware( // api1 是需要转发的请求（所有带有 /api1 前缀的请求都会转发给 3001）
      {
        target: 'http://localhost:3001', // 配置转发目标地址（即，能返回数据的服务器地址）
        changeOrigin: true, // 控制服务器接收到的请求头中 Host 字段的值
        /*
          changeOrigin 设置为 true 时，服务器收到的请求头中的 Host 为：localhost:3001
          changeOrigin 设需为 false 时，服务器收到的请求头中的 Host 为：localhost:3000
          changeOrigin 默认值为 false，但我们一般将 changeOrigin 值设为 true
        */
        pathRewrite: { '^/api1': '' } // 去除请求前缀，保证交给后台服务器的是正常请求地址（必须配置）
      }
    ),
    'api2', createProxyMiddleware(
      {
        target: 'http://localhost:3002',
        changeOrigin: true,
        pathRewrite: { '^/api2': '' }
      }
    )
  )
}