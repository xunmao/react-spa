import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Item.css'

export default class Item extends Component {

  // 类型检查
  static propTypes = {
    // 检查 todo 对象
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired
    }).isRequired,
    // 检查 updateTodo 函数
    updateTodo: PropTypes.func.isRequired,
    // 检查 deleteTodo 函数
    deleteTodo: PropTypes.func.isRequired
  }

  state = {
    isMouseHover: false
  }

  // 处理光标移入 todo 条目事件的回调，光标移入时，高亮条目并显示删除按钮
  handleMouseEnter = () => {
    this.setState({ isMouseHover: true })
  }

  // 处理光标移出 todo 条目事件的回调，光标移出时，条目恢复并隐藏删除按钮
  handleMouseLeave = () => {
    this.setState({ isMouseHover: false })
  }

  // 处理勾选 todo 条目事件的回调，勾选时表示 todo 条目已经完成
  handleChange = (event) => {
    const { id, title } = this.props.data
    const { checked } = event.target
    const todoObj = {
      id: id,
      title: title,
      isDone: checked
    }
    this.props.updateTodo(todoObj)
  }

  // 处理点击删除按钮事件的回调，点击删除按钮，删除该条目
  handleDelete = (id) => {
    return () => {
      // 弹出对话框，让用户确认是否删除该 todo
      // 【注意】这里必须使用 window.confirm() 方法，直接调用 confirm() 会导致报错
      // confirm() 在 React 框架中并不是默认的方法
      if (window.confirm('确定要删除吗？')) { this.props.deleteTodo(id) }
    }
  }

  render() {
    const { id, title, isDone } = this.props.data
    const { isMouseHover } = this.state
    return (
      <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
        <label>
          {/* 
          1. defaultChecked 只在第一次渲染组件时生效，之后即使 todo 的状态有变化，复选框也不会刷新
          2. checked 会在 todo 状态变化时刷新复选框，但是，必须配合 onChange 回调使用，否则就被写死了
           */}
          <input type="checkbox" checked={isDone} onChange={this.handleChange} />
          <span>{title}</span>
        </label>
        <button className='btn btn-danger' style={{ display: isMouseHover ? 'block' : 'none' }} onClick={this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
