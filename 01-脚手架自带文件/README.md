# 脚手架自带文件

React 脚手架会生成如下文件：

```
/my_application
  /public                <-- 静态资源文件在这里
    /favicon.ico         <-- 网站页签图标
    /index.html          <-- 主页面
    /logo192.png         <-- logo图片
    /logo512.png         <-- logo图片
    /manifest.json       <-- 应用加壳的配置文件
    /robots.txt          <-- 爬虫协议文件
  /src
    /App.css             <-- App组件的样式文件
    /App.js              <-- App组件
    /App.test.js         <-- APP组件的测试文件
    /index.css           <-- 主页面的样式文件
    /index.js            <-- 入口文件
    /logo.svg            <-- logo图片（React官方的图标）
    /reportWebVitals.js  <-- 页面性能分析文件（需要web-vitals库的支持）
    /setupTests.js       <-- 自动化测试配置文件（需要jest-dom库的支持）
  ......
```

除了上述文件之外，脚手架还会生成 [README](./README-Template.md) 文件