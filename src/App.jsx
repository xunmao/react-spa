import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  // 状态提升：Search 组件中获取到的数据，通过状态提升，传递给 List 组件，进行数据展示
  state = { users: [] }

  // 状态在哪里，操作状态的方法就在哪里
  saveUsers = (rawUsers) => {
    const users = rawUsers.map(
      rawUser => {
        return {
          login: rawUser.login,
          id: rawUser.id,
          avatar_url: rawUser.avatar_url,
          html_url: rawUser.html_url
        }
      }
    )
    this.setState({ users })
  }

  render() {
    const { users } = this.state
    return (
      <div className='container'>
        <Search saveUsers={this.saveUsers} />
        <List users={users} />
      </div>
    )
  }
}
