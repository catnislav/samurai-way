import React from 'react'
import axios from 'axios'
import Users from './Users'

class UsersApiComponent extends React.Component {
  componentDidMount() {
    if (this.props.usersList.length === 0) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${this.props.currentPage}`)
        .then(res => {
          this.props.setUsers(res.data.items)
          this.props.setTotalUsersCount(res.data.totalCount)
          console.log('this.props.usersList', this.props.usersList)
        })
    }
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${page}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  render() {
    return <Users onPageChanged={this.onPageChanged} {...this.props } />
  }
}

export default UsersApiComponent