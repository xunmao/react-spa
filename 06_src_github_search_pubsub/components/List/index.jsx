import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { SEARCH_TOPIC } from '../../constants'
import './index.css'

export default class List extends Component {

  state = {
    isFirst: true, // 用于判断是否应该展示初始页面，默认为 true
    isLoading: false, // 用于判断是否应该展示加载中页面，默认为 false
    users: [], // 用于保存搜索结果（用户列表）
    errMsg: "" // 用于保存报错信息
  }

  // 组件挂载之后，订阅消息。生命周期函数的执行顺序是：
  // 先调用`render`，再调用`componentDidMount`。
  componentDidMount() {
    // 回调函数中的第一个参数是消息名，即，`SEARCH_TOPIC`代表的字符串。
    // 我们这里不需要这个参数，可以通过下划线“_”来完成参数占位操作。
    this.token = PubSub.subscribe(SEARCH_TOPIC, (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  // 在组件即将卸载时，取消订阅。
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { isFirst, isLoading, users, errMsg } = this.state
    return (
      // 通过串联三元运算符来控制页面显示
      isFirst ? <h2>Enter a keyword to search.</h2> :
        isLoading ? <h2>Loading......</h2> :
          errMsg ? <h2 style={{ color: "red" }} > {errMsg} </h2> :
            <div className="row row-cols-2 row-cols-md-4 g-4">
              {
                users.map(
                  (user) => {
                    return (
                      <div className='col' key={user.id}>
                        <div className="card">
                          <a href={user.html_url} target="_blank" rel='noreferrer'>
                            <img alt='an avatar of a github user' src={user.avatar_url} />
                          </a>
                          <p className="card-text">{user.login}</p>
                        </div>
                      </div>
                    )
                  }
                )
              }
            </div>
    )
  }
}
