
import React from 'react'
import axios from 'axios'
import Users from './Users'
import { connect } from 'react-redux'
// import {
//   followAC,
//   setCurrentPageAC,
//   setTotalUsersCountAC,
//   setUsersAC,
//   toggleIsFetchingAC,
//   unfollowAC
// } from '../../../redux/usersReducer'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from '../../../redux/usersReducer'
// import UsersFunction from './UsersFunction'
// import UsersClass from './UsersClass'
// import UsersApiComponent from './UsersApiComponent'

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.usersList.length === 0) {
      this.props.toggleIsFetching(true)

      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${this.props.currentPage}`)
        .then(res => {
          this.props.setUsers(res.data.items)
          this.props.setTotalUsersCount(res.data.totalCount)
          console.log('this.props.usersList', this.props.usersList)
          this.props.toggleIsFetching(false)
        })
    }
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.toggleIsFetching(true)

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${page}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  render() {
    return <Users onPageChanged={this.onPageChanged} {...this.props } />
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.users
    // usersList: state.users.usersList,
    // usersPerPage: state.users.usersPerPage,
    // totalUsersCount: state.users.totalUsersCount,
    // currentPage: state.users.currentPage,
    // isFetching: state.users.isFetching
  }
}  

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (id) => {
//       dispatch(followAC(id))
//     },
//     unfollow: (id) => {
//       dispatch(unfollowAC(id))
//     },
//     setUsers: (usersList) => {
//       dispatch(setUsersAC(usersList))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
}

// export default connect(mapStateToProps, mapDispatchToProps)(UsersFunction)
// export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)