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

  render() {
    const { title, isDone } = this.props.data
    const { isMouseHover } = this.state
    return (
      <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
        <label>
          <input type="checkbox" defaultChecked={isDone} />
          <span>{title}</span>
        </label>
        <button className='btn btn-danger' style={{ display: isMouseHover ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
