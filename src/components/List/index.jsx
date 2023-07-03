import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          this.props.users.map(
            (user) => {
              return (
                <div className='col' key={user.id}>
                  <div className="card">
                    <a href={user.html_url} target="_blank" rel='noreferrer'>
                      <img alt='an avatar of a github user' src={user.avatar_url}
                        style={{ width: '100px', marginBottom: '0.75rem', borderRadius: '100px' }} />
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
