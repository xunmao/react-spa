import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
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
      resp => { this.props.saveUsers(resp.data.items) },
      err => { console.error('失败了', err); }
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
