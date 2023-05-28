// 引入 React 核心库
import React from 'react';
// 引入 ReactDOM，用于支持 React 操作 DOM
// 【注意】在使用脚手架时，ReactDOM 的引入方式与直接引入时不同
//   直接引入时，可以这样写：
//     import ReactDOM from 'react-dom';
//   但是，在脚手架中这样写会有警告：
//     Warning: You are importing createRoot from "react-dom" which is not supported.
//     You should instead import it from "react-dom/client".
import ReactDOM from 'react-dom/client'
// 引入 App 组件
import App from './App';

// 将 App 组件渲染至页面
ReactDOM.createRoot(document.getElementById('root')).render(<App />);