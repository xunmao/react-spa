import React, { Component } from 'react'
import PropTypes from "prop-types";
import { nanoid } from 'nanoid'
import './Header.css'

export default class Header extends Component {

  // 类型检查
  static propTypes = {
    // 检查 addTodo 函数
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {

    // 0. 从 event 对象中获取 target 和 keyCode
    const { target, keyCode } = event
    // 1. 如果用户尚未按下回车键，表示输入尚未完成，跳过后续处理
    if (keyCode !== 13) { return }

    // 2. 如果用户按下回车键，表示输入已经完成，开始后续处理
    // 2.1. 如果用户输入的内容为空，需要提示用户重新输入，并跳过后续处理
    if (target.value.trim() === '') {
      alert('任务名称不能为空，请重新输入任务名称')
      return
    }
    // 2.2. 如果用户输入的内容不为空，则新建 todo 对象，并传递给 App 组件，以便更新 todo 列表
    // 2.2.1. 获取 UUID 作为 todo 对象的 id
    const id = nanoid()
    // 2.2.2. 使用用户输入的内容作为 todo 对象的 title，isDone 默认设置为 false（表示该 todo 尚未完成）
    const todo = { id: id, title: target.value, isDone: false }
    // 2.2.3. 将新建的 todo 对象传递给 App 组件
    this.props.addTodo(todo)
    // 2.2.4. 将输入框中的内容清空，以便用户输入新的内容
    target.value = ''
  }

  render() {
    return (
      <div className='todo-header'>
        <input type="text" placeholder='请输入你的任务名称，按回车键确认' onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}
