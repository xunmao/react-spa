import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { SEARCH_TOPIC } from '../../constants'
import "./index.css"

export default class Search extends Component {

  search = () => {
    // 用户点击 Search 按钮后，需要展示 Loading 页面，并且隐藏初始页面
    PubSub.publish(SEARCH_TOPIC, { isFirst: false, isLoading: true })

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
    const url = `https://api.github.com/search/users1?q=${username}`

    // this.fetchDataByPromise(url)
    this.fetchDataByTryCatch(url)
  }

  // 使用 Fetch 的第一种方法——通过 Promise 的链式调用
  fetchDataByPromise = (url) => {
    fetch(url).then(
      resp => {
        console.log('连接服务器成功', resp);
        // 调用 json() 方法来生成一个新的 Promise 对象，这个 Promise 对象成功之后即可获得 JSON 格式的数据
        return resp.json()
      }
    ).then(
      data => {
        console.log('获取数据成功', data);
        // 由于返回的用户数据中包含其他未使用的字段，去掉这些多余的字段
        const users = data.items.map(
          rawUser => {
            return {
              login: rawUser.login,
              id: rawUser.id,
              avatar_url: rawUser.avatar_url,
              html_url: rawUser.html_url
            }
          }
        )
        PubSub.publish(SEARCH_TOPIC, { isLoading: false, users })
      }
    ).catch(
      err => {
        console.log(err);
        PubSub.publish(SEARCH_TOPIC, { isLoading: false, errMsg: err.message })
      }
    )
  }

  // 使用 Fetch 的第二种方法——通过 async/await 关键字
  fetchDataByTryCatch = async (url) => {
    try {
      const resp = await fetch(url)
      console.log('连接服务器成功', resp);

      const data = await resp.json()
      if (resp.status !== 200) {
        throw new Error(`API调用失败: ${resp.status} ${data.message}`)
      }
      console.log('获取数据成功', data);

      const users = data.items.map(
        rawUser => {
          return {
            login: rawUser.login,
            id: rawUser.id,
            avatar_url: rawUser.avatar_url,
            html_url: rawUser.html_url
          }
        }
      )
      PubSub.publish(SEARCH_TOPIC, { isLoading: false, users })
    } catch (err) {
      console.log(err);
      PubSub.publish(SEARCH_TOPIC, { isLoading: false, errMsg: err.message })
    }
  }

  render() {
    return (
      <section>
        <h3 className='search-header'>Search Github Users</h3>
        <div className='mb-3'>
          <input type="text" placeholder="enter the name you search"
            className='search-input' ref={currNode => this.usernameNode = currNode} />
          &nbsp;
          <button className='btn btn-primary' onClick={this.search} >Search</button>
        </div>
      </section>
    )
  }
}
