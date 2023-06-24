import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <section>
        <h3 >Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" />&nbsp;<button>Search</button>
        </div>
      </section>
    )
  }
}
