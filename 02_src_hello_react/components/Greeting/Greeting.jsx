import React, { Component } from 'react'
import greeting from './Greeting.module.css'

export default class Greeting extends Component {
  render() {
    return (
      <h1 className={greeting.title}>How're you doing, bro?</h1>
    )
  }
}
