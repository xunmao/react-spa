import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {

  // 类型检查
  static propTypes = {
    isFirst: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
      login: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      avatar_url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired
    })).isRequired,
    errMsg: PropTypes.string.isRequired
  }

  render() {
    const { isFirst, isLoading, users, errMsg } = this.props
    return (
      // 通过串联三元运算符来控制页面显示
      isFirst ? <h2>Enter a keyword to search.</h2> :
        isLoading ? <h2>Loading......</h2> :
          errMsg ? <h2 style={{ color: "red" }} > {errMsg} </h2> :
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                users.map(
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
