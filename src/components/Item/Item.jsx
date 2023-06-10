import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {

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
