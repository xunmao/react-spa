import React, { Component } from 'react'
import PropTypes from "prop-types";
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {

  // 类型检查
  static propTypes = {
    // 检查 todo 列表
    todos: PropTypes.arrayOf(
      // 检查 todo 对象
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired
      })
    ).isRequired,
    // 检查 updateTodo 函数
    updateTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo } = this.props
    return (
      <ul className='todo-list'>
        {todos.map(todo => <Item data={todo} key={todo.id} updateTodo={updateTodo} />)}
      </ul>
    )
  }
}
