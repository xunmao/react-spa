import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Search extends Component {

  // 类型检查
  static propTypes = {
    updateAppState: PropTypes.func.isRequired
  }

  search = () => {
    const { updateAppState } = this.props
    // 用户点击 Search 按钮后，需要展示 Loading 页面，并且隐藏初始页面
    updateAppState({ isFirst: false, isLoading: true })

    // 从表单中获取用户的输入（非受控组件：ref）
    // 结构赋值并重新定义变量，相当于将 this.usernameNode.value 赋值给一个叫做 username 的新变量
    const { value: username } = this.usernameNode
    // 如果用户输入的内容为空，需要提示用户重新输入，并跳过后续处理
    if (!username.trim()) {
      alert('关键词不能为空，请重新输入关键词')
      return
    }
    // 使用“模板字符串”来拼接请求
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals
    axios.get(`https://api.github.com/search/users?q=${username}`).then(
      resp => {
        // 由于返回的用户数据中包含其他未使用的字段，去掉这些多余的字段
        const users = resp.data.items.map(
          rawUser => {
            return {
              login: rawUser.login,
              id: rawUser.id,
              avatar_url: rawUser.avatar_url,
              html_url: rawUser.html_url
            }
          }
        )
        // 请求成功时，隐藏 Loading 页面，并展示返回的用户数据
        updateAppState({ isLoading: false, users })
      },
      err => {
        // 请求失败时，隐藏 Loading 页面，并展示失败时的错误信息
        updateAppState({ isLoading: false, errMsg: err.message })
      }
    )
  }

  render() {
    return (
      <section>
        <h3>Search Github Users</h3>
        <div className='mb-3'>
          <input type="text" placeholder="enter the name you search" ref={currNode => this.usernameNode = currNode} />
          &nbsp;
          <button className='btn btn-primary' onClick={this.search} >Search</button>
        </div>
      </section>
    )
  }
}
