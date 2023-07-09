import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  // 状态提升：Search 组件中获取到的数据，通过状态提升，传递给 List 组件，进行数据展示
  state = {
    isFirst: true, // 用于判断是否应该展示初始页面，默认为 true
    isLoading: false, // 用于判断是否应该展示加载中页面，默认为 false
    users: [], // 用于保存搜索结果（用户列表）
    errMsg: "" // 用于保存报错信息
  }

  // 状态在哪里，操作状态的方法就在哪里
  updateAppState = (stateObj) => { this.setState(stateObj) }

  render() {
    return (
      <div className='container'>
        <Search updateAppState={this.updateAppState} />
        {/* 可以使用以下方式传递多个属性值 */}
        <List {...this.state} />
      </div>
    )
  }
}
