import React, { Component } from 'react'
import './List.css'
import Item from '../Item/Item'

export default class List extends Component {
  render() {
    const { todos } = this.props
    return (
      <ul className='todo-list'>
        {todos.map(todo => <Item data={todo} key={todo.id} updateTodo={this.props.updateTodo} />)}
      </ul>
    )
  }
}
