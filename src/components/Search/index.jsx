import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <section>
        <h3>Search Github Users</h3>
        <div className='mb-3'>
          <input type="text" placeholder="enter the name you search" />
          &nbsp;
          <button className='btn btn-primary' >Search</button>
        </div>
      </section>
    )
  }
}
