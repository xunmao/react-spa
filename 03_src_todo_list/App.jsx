import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'

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
  // 当 Header 组件中产生新的 todo 数据时，可以通过该函数获得，并添加到 todo 列表中
  addTodo = (todoObj) => {
    // 获取当前的 todo 列表
    const { todos } = this.state
    // 新建 todo 列表，将新增的 todo 对象放入第一位，之后放入当前的 todo 列表
    const newTodos = [todoObj, ...todos]
    // 用新建的 todo 列表，替换当前的 todo 列表，完成 state 更新
    this.setState({ todos: newTodos })
  }

  // 更新 todo 对象，将这个函数传给 List 组件，即可获取 List 组件中的数据
  // 当 List 组件中 todo 对象的完成状态发生变化时，可以通过该函数获得，并更新 todo 列表
  updateTodo = (todoObj) => {
    // 获取当前的 todo 列表
    const { todos } = this.state
    // 新建 todo 列表，找到需要更新的 todo 对象并更新，
    // 将更新好的 todo 对象以及其他的 todo 对象放入新的 todo 列表
    const newTodos = todos.map((todo) => {
      if (todo.id === todoObj.id) {
        todo.isDone = todoObj.isDone
      }
      return todo
    })
    // 用新建的 todo 列表，替换当前的 todo 列表，完成 state 更新
    this.setState({ todos: newTodos })
  }

  // 删除 todo 对象，将这个函数传给 List 组件，即可获取 List 组件中的数据
  // 当 List 组件中的某个 todo 对象被删除时，可以通过该函数获得 id，并更新 todo 列表
  deleteTodo = (id) => {
    // 获取当前的 todo 列表
    const { todos } = this.state
    // 新建 todo 列表，通过 id 找到需要删除的 todo 对象并删除，
    // 将其他的 todo 对象放入新的 todo 列表
    const newTodos = todos.filter(todo => todo.id !== id)
    // 用新建的 todo 列表，替换当前的 todo 列表，完成 state 更新
    this.setState({ todos: newTodos })
  }

  // 根据“全选”复选框更新 todo 事项的状态
  selectAllTodos = (isAllSelected) => {
    // 获取当前的 todo 列表
    const { todos } = this.state
    // 新建 todo 列表，将每一 todo 对象的状态更新为“全选”复选框的状态
    const newTodos = todos.map((todo) => {
      // ...todo 表示将 todo 对象上的属性解构出来，
      // 然后，isDone 属性的值重新设定为 isAllSelected
      return { ...todo, isDone: isAllSelected }
    })
    // 用新建的 todo 列表，替换当前的 todo 列表，完成 state 更新
    this.setState({ todos: newTodos })
  }

  // 清除所有已完成的 todo 项目
  clearIsDoneTodos = () => {
    // 获取当前的 todo 列表
    const { todos } = this.state
    // 新建 todo 列表，找到已经完成的 todo 对象并删除，
    // 将其他的 todo 对象放入新的 todo 列表
    const newTodos = todos.filter(todo => !todo.isDone)
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
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} selectAllTodos={this.selectAllTodos} clearIsDoneTodos={this.clearIsDoneTodos} />
        </div>
      </div>
    )
  }
}
