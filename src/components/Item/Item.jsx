import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  render() {
    const { title, isDone } = this.props.data
    return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={isDone} />
          <span>{title}</span>
        </label>
        <button className='btn btn-danger' style={{ display: 'none' }}>删除</button>
      </li>
    )
  }
}
