import React from 'react'
import styles from './Users.module.scss'
import axios from 'axios'

class Users extends React.Component {
  // constructor(props) {super(props)}

  // getUsers = () => {
  //   if (this.props.usersList.length === 0) {
  //     axios
  //     .get('https://social-network.samuraijs.com/api/1.0/users')
  //     .then(res => {
  //       this.props.setUsers(res.data.items)
  //       console.log(res.data.items)
  //       console.log('usersList', this.props.usersList)
  //     })
  //   }
  // }

  componentDidMount() {
    if (this.props.usersList.length === 0) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${this.props.currentPage}`)
        .then(res => {
          this.props.setUsers(res.data.items)
          this.props.setTotalUsersCount(res.data.totalCount)
          // console.log('usersList', this.props.usersList)
        })
    }
  }

  // componentWillUnmount() {}

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${page}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
        // console.log('usersList', this.props.usersList)
      })
  }

  render() {
    console.log('this.props', this.props)
    let pagesCount = this.props.totalUsersCount / this.props.usersPerPage
    let pages = []
    
    for (let i = 0; i < pagesCount; i++) pages.push(i)

    return (
      <div className={styles.users}>
        <div className={styles.users__title}>
          Users
        </div>
  
        {/* { this.props.usersList.length === 0 ?
          <button onClick={() => this.getUsers()} className={styles.user__button}>
            Get Users
          </button> : null
        } */}

        <div className={styles.users__pagination}>
          { pages.map((el, ind) => {
            return (
              <button
                key={ind}
                className={[
                  styles.users__pagination__button,
                  this.props.currentPage === ind + 1 ? styles.users__pagination__buttonCurrent : ''
                ].join(' ')}
                onClick={() => this.onPageChanged(ind + 1)}
              >
                {ind + 1}
              </button>
            )
          }) }
        </div>
  
        <div className={styles.users__list}>
          { this.props.usersList.map(el => {
            return (
              // <div className={styles.user} key={el.id}>
              //   <div className={styles.user__col}>
              //     <div className={styles.user__avatar} style={{ backgroundImage: `url(${!!el.avatar ? el.avatar : 'https://www.gourmandize.com/uploads/article/59/f3/6e/62/mcdonalds-2.png?1505483069'})` }}></div>
              //       { !el.followed
              //         ? <button onClick={() => {follow(el.id)}} className={styles.user__button}>Follow</button>
              //         : <button onClick={() => {unfollow(el.id)}} className={styles.user__button}>Unfollow</button>
              //       }
              //   </div>
  
              //   <div className={styles.user__block}>
              //     <div className={styles.user__col}>
              //       <div className={styles.user__name}>
              //         {el.name}
              //       </div>
              //     </div>
  
              //     <div className={styles.user__col} style={{ marginLeft: 'auto' }}>
              //       <div className={styles.user__location}>
              //         {el.location.city}, {el.location.country}
              //       </div>
              //     </div>
              //   </div>
              // </div>
  
              <div className={styles.user} key={el.id}>
                <div className={styles.user__col} style={{ flexShrink: 0 }}>
                  <div className={styles.user__avatar} style={{ backgroundImage: `url(${el.photos.small !== null ? el.photos.small : 'https://www.gourmandize.com/uploads/article/59/f3/6e/62/mcdonalds-2.png?1505483069'})` }}></div>
                </div>

                <div className={styles.user__col}>
                  <div className={styles.user__name}>
                    {el.name}
                  </div>
                  { !el.followed
                    ? <button onClick={() => {this.props.follow(el.id)}} className={styles.user__button}>Follow</button>
                    : <button onClick={() => {this.props.unfollow(el.id)}} className={styles.user__button}>Unfollow</button>
                    }
                </div>
  
                {/* <div className={styles.user__block}>
                  <div className={styles.user__col}>
                    <div className={styles.user__name}>
                      {el.name}
                    </div>
                  </div>
  
                  <div className={styles.user__col} style={{ marginLeft: 'auto' }}>
                    <div className={styles.user__status}>
                      {el.status}
                    </div>
                  </div>
                </div> */}
              </div>
            ) 
          })}
        </div>
      </div>
    )
  }
}

export default Users