# react-spa

## 一、Git仓库

### 1、在本地创建React工程

通过React脚手架创建工程。

### 2、在GitHub上创建仓库

可以创建空白仓库，也可以创建一些带有初始文件的仓库。

最好避免携带很多初始文件，以免后续操作中发生文件冲突。

这里创建一个只带有LICENSE文件的仓库。

### 3、将本地代码推送至GitHub仓库

1. 设置远程分支
```sh
git remote add origin git@github.com:xunmao/react-spa.git
```
2. 更改分支名称（可选）
```sh
git branch -M main
```
3. 确认操作结果
```sh
git remote -v
(output)
origin  git@github.com:xunmao/react-spa.git (fetch)
origin  git@github.com:xunmao/react-spa.git (push)
```
4. 设置上游分支
```sh
git branch --set-upstream-to=origin/main main
```
5. 如果在GitHub上创建的是空白仓库，可以跳过第6步
6. 如果在GitHub上创建的仓库中包含初始文件，需要在本地进行合并（变基）
```sh
git pull --rebase
```
7. 将本地代码提交至GitHub
```sh
git push -u origin main
```

## 二、脚手架文件

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

## React - Example - todo-list

[todo-list](03_src_todo_list/README.md)

## React Ajax

1. [React脚手架配置代理](04_src_配置代理/README.md)

# GitHub搜索案例

## 导入Bootstrap

1. 参考链接  
https://v5.bootcss.com/docs/getting-started/introduction/#quick-start
2. 国内加速  
https://www.bootcdn.cn/twitter-bootstrap/

## JS知识补充

连续结构赋值：[JS知识补充](src/JS知识补充.html)

Github API for Search Users

```js
`https://api.github.com/search/users?q=${keyword}`
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
