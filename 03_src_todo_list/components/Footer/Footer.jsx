import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

export default class Footer extends Component {

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
    // 检查 selectAllTodos 函数
    selectAllTodos: PropTypes.func.isRequired,
    // 检查 clearIsDoneTodos 函数
    clearIsDoneTodos: PropTypes.func.isRequired
  }

  // 处理全选的事件的回调，通知其他组件当前是否为全选状态
  handleSelectAll = (event) => {
    const { checked } = event.target
    this.props.selectAllTodos(checked)
  }

  // 清除所有已完成的 todo 项目
  handleClearIsDoneTodos = () => {
    this.props.clearIsDoneTodos()
  }

  render() {
    const { todos } = this.props
    // 【注意】通过数组的 reduce 方法来统计数量
    const doneCount = todos.reduce((count, todo) => count + (todo.isDone ? 1 : 0), 0)
    return (
      <div className='todo-footer'>
        <label>
          {/* 
          1. 当同时满足以下条件时，勾选“全选”复选框
            1. 当已完成 todo 的数量等于全部 todo 的数量时
            2. 当 todo 事项的总数不等于零时
          2. 根据是否全选更新 todo 的状态
            1. 当勾选“全选”复选框时，应该将所有 todo 的设置为已完成，即 isDone 设置为 true
            2. 当取消“全选”复选框时，应该将所有 todo 的设置为未完成，即 isDone 设置为 false
          */}
          <input type="checkbox" checked={doneCount === todos.length && todos.length !== 0}
            onChange={this.handleSelectAll} />
          <span>全选</span>
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {todos.length}
        </span>
        <button className='btn btn-danger' onClick={this.handleClearIsDoneTodos} >清除已完成任务</button>
      </div>
    )
  }
}
