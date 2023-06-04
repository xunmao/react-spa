import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'

export default class App extends Component {

  // 初始化状态
  state = {
    todos: [
      { id: '001', title: 'Eat breakfast', isDone: true },
      { id: '002', title: 'Eat lunch', isDone: true },
      { id: '003', title: 'Eat dinner', isDone: false }
    ]
  }

  // 新增 todo 对象，将这个函数传给 Header 组件，即可获取 Header 组件中的数据
  addTodo = (todoObj) => {
    // 获取当前的 todo 列表
    const { todos } = this.state
    // 新建 todo 列表，将新增的 todo 对象放入第一位，之后放入当前的 todo 列表
    const newTodos = [todoObj, ...todos]
    // 用新建的 todo 列表，替换当前的 todo 列表，完成 state 更新
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          {/* 
            要想获得 Header 组件中的数据，可以传递一个函数给它，
            然后，Header 在适当的时机调用传入的函数即可。
          */}
          <Header addTodo={this.addTodo} />
          {/* 
            要想让父组件传递数据给子组件，可以使用 props 传递。
          */}
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
