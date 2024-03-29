import React, { Component } from 'react'
import axios from 'axios';
import './App.css'

export default class App extends Component {

  getStudentsData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => console.log('成功了', response.data),
      error => console.log('失败了', error)
    )
  }

  getPostsData = () => {
    axios.get('http://localhost:3000/api2/posts').then(
      response => console.log('成功了', response.data),
      error => console.log('失败了', error)
    )
  }

  render() {
    return (
      <div className='container'>
        <ul>
          <li>
            <button onClick={this.getStudentsData} >点我获取学生数据</button>
          </li>
          <li>
            <button onClick={this.getPostsData} >点我获取帖子数据</button>
          </li>
        </ul>
      </div>
    )
  }
}
