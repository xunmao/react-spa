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
    updateTodo: PropTypes.func.isRequired
  }

  state = {
    isMouseHover: false
  }

  handleMouseEnter = () => {
    this.setState({ isMouseHover: true })
  }

  handleMouseLeave = () => {
    this.setState({ isMouseHover: false })
  }

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

  render() {
    const { title, isDone } = this.props.data
    const { isMouseHover } = this.state
    return (
      <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
        <label>
          <input type="checkbox" defaultChecked={isDone} onChange={this.handleChange} />
          <span>{title}</span>
        </label>
        <button className='btn btn-danger' style={{ display: isMouseHover ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
