/*
****************************************************************
一、基本内容（复习定义组件的两种方式）
****************************************************************
*/

// 1、定义函数式组件
/*
  function App() {
    return <h1>Hello React From Function Component</h1>
  }
*/

// 2、定义类式组件
/*
  // 1. 引入 React 核心库
  import React from 'react'
  // 2. 类式组件需要继承核心库中的 Component 类
  class App extends React.Component {
    // 3. 实现 render 方法
    render() {
      return <h1>Hello React From Class Component</h1>
    }
  }
*/

/*
****************************************************************
二、扩展内容（复习模块化相关的语法）
****************************************************************
*/

/*
  // 1、解构赋值
  import React from 'react'
  // 从 React 对象身上解构出 Component 属性并赋值
  const { Component } = React
  class App extends Component {
    render() {
      return <h1>Hello React From Class Component 解构赋值</h1>
    }
  }
*/

/*
  // 2、分别暴露
  // Component 类是分别暴露出来的，因此也可以这样导入。这跟解构赋值是不同的
  import React, { Component } from 'react'
  class App extends Component {
    render() {
      return <h1>Hello React From Class Component 分别暴露</h1>
    }
  }
*/

/*
****************************************************************
三、进阶内容（组件化）
****************************************************************
*/

import React, { Component } from "react"
import Hello from "./components/Hello/Hello";
// 【注意】由于使用了 index 作为文件名，因此可以省略
import Welcome from "./components/Welcome";
import Greeting from './components/Greeting/Greeting'

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
        <Greeting />
      </div>
    );
  }
}

// 默认暴露 App 组件，以便导入 App.js 文件之后可以使用
export default App