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

  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
