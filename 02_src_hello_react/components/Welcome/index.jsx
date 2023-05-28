/*
****************************************************************
一、扩展内容（其他命名规范）
****************************************************************

1、扩展名可以改为 .jsx 以便快速区分组件与普通的 JS 文件
2、JSX 和 CSS 的文件名可以改为 index 以更简洁地导入
*/

import React, { Component } from "react";
import './index.css'

export default class Welcome extends Component {
  render() {
    return (
      <h1 className="welcome-title">Welcome To The React World!</h1>
    );
  }
}