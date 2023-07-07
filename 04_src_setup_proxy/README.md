# React 脚手架配置代理

# 存在问题

使用 `setupProxy.js` 配置代理时发生错误，无法访问页面。

## 搭建环境 - JSON Server

本项目使用`json-server`作为后台服务器：https://github.com/typicode/json-server  
`db.json`中保存后台服务器中的数据  
通过以下命令全局安装`json-server`  
```sh
npm install -g json-server
```
为了避免端口冲突，在3001端口运行  
```sh
json-server -p 3001 --watch db.json
```

## 配置方法

## 方法一 - package.json

> 在`package.json`中追加如下配置
```json
"proxy": "http://1ocalhost :3001"
```

说明：
1. 优点：配置简单，前端请求资源时可以不加任何前缀
2. 缺点：不能配置多个代理
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给3001（优先匹配前端资源）

## 方法二 - setupProxy.js

1. 第一步：创建代理配置文件
> 在src下创建配需文件：src/setupProxy.js

2. 编写 `setupProxy.js` 配置具体代理规则：
```js
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', { // api1 是需要转发的请求（所有带有 /api1 前缀的请求都会转发给 3001）
      target: 'http://localhost:3001', // 配置转发目标地址（即，能返回数据的服务器地址）
      changeOrigin: true, // 控制服务器接收到的请求头中 Host 字段的值
      /*
        changeOrigin 设置为 true 时，服务器收到的请求头中的 Host 为：localhost:3001
        changeOrigin 设需为 false 时，服务器收到的请求头中的 Host 为：localhost:3000
        changeOrigin 默认值为 false，但我们一般将 changeOrigin 值设为 true
      */
      pathRewrite: { '^/api1': '' } // 去除请求前缀，保证交给后台服务器的是正常请求地址（必须配置）
    }),
    proxy('/api2', {
      target: 'http://localhost:3002',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    })
  )
}
```

说明：
1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理
2. 缺点：配置警琐，前端请求资源时必须加前缀

补充：
1. 在18.2版本中使用上述文件时，遇到以下报错
```text
crbug/1173575, non-JS module files deprecated.
```
2. 参考以下链接更改上述文件  
https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually

## 其他

### ChatGPT辅助学习

#### 提问1
我正在学习React框架，React的版本是18.2。目前，我在3000端口上运行了一个开发服务器，我制作的React应用运行在这个开发服务器上；另外，在3001端口上我还运行了一个后台服务器。我觉得React应用访问这个后台服务器时，会遇到跨域问题，如果遇到这个问题，我的解决方案是设置一个代理服务器。但是，实际上我在未设置代理时，也没有遇到跨域问题，这是问什么？

#### 回答1
React 18.2 版本中默认开启了跨域资源共享（CORS）功能，这意味着在开发服务器中，React应用可以通过HTTP请求访问不同域下的资源（例如你的后台服务器的资源），而不会遇到跨域问题。  
在你的情况下，由于你的React应用和后台服务器运行在不同的端口上，它们的域名不同，因此按照同源策略，你的React应用将无法直接访问后台服务器的资源。然而，React开发服务器默认使用了一个代理服务器，将HTTP请求转发到目标服务器上，这个代理服务器中包含了跨域的相关设置，因此你的React应用能够访问后台服务器的资源而没有遇到跨域问题。  
因此在你的情况下，可能并不需要手动设置一个代理服务器，因为React开发服务器已经提供了默认的跨域解决方案。如果你遇到了跨域问题，可以通过配置代理服务器来解决它。

#### 提问2
我在本地启动react应用时，遇到了一个问题。默认的地址（localhost:3000）无法访问，浏览器的控制台显示的报错信息是：“crbug/1173575, non-JS module files deprecated.”。在我的react应用中，有个setupProxy配置文件，用来配置代理服务器。当我删除这个配置文件时，就不会遇到上述报错。我的react版本时18.2。我想知道，这个报错的原因是什么？以及，我怎样做才能避免这个问题。

#### 回答2
这个报错信息是由 Google Chrome 浏览器的最新版本引起的，它指出使用了已经被弃用的非 JS 模块文件。  
这个问题是因为在使用 `setupProxy` 时，你的应用程序使用了 `http-proxy-middleware` 库，该库使用了已经被弃用的 `require.extensions` API 来加载非 JS 模块文件。而这个 API 已经被从 Node.js 中移除，并且在未来的版本中将会被完全移除。  
要解决这个问题，你可以通过升级 `http-proxy-middleware` 库来使用新的加载机制，或者将你的非 JS 模块文件转换为 JS 模块文件。  
如果你选择升级 `http-proxy-middleware` 库，可以在你的项目中使用 `npm` 或 `yarn` 命令来安装最新版本的库：
```
npm install http-proxy-middleware@2.0.1
```
或者：  
```
yarn add http-proxy-middleware@2.0.1
```
如果你选择将非 JS 模块文件转换为 JS 模块文件，可以使用 `babel` 或者 `webpack` 等工具来完成这个任务。你需要确保你的应用程序能够正确地加载这些转换后的模块文件。  
总之，升级 `http-proxy-middleware` 库或者将非 JS 模块文件转换为 JS 模块文件都可以解决这个问题。
