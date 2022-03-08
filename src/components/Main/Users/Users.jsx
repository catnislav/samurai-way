import React from 'react'
import styles from './Users.module.scss'

const Users = (props) => {
  let pagesCount = props.totalUsersCount / props.usersPerPage
  let pages = []
  
  for (let i = 0; i < pagesCount; i++) pages.push(i)

  return (
    <div className={styles.users}>
      <div className={styles.users__title}>
        Users
      </div>

      <div className={styles.users__pagination}>
        { pages.map((el, ind) => {
          return (
            <button
              key={ind}
              className={[
                styles.users__pagination__button,
                props.currentPage === ind + 1 ? styles.users__pagination__buttonCurrent : ''
              ].join(' ')}
              onClick={() => props.onPageChanged(ind + 1)}
            >
              {ind + 1}
            </button>
          )
        }) }
      </div>

      { props.isFetching
        ? <img style={{ marginTop: 8 }} src='https://www.firstsecurity.co.nz/assets/images/spinner.gif' width='60' height='60' alt='loading'/>
        : <div className={styles.users__list}>
          { props.usersList.map(el => {
            return (  
              <div className={styles.user} key={el.id}>
                <div className={styles.user__col} style={{ flexShrink: 0 }}>
                  <div className={styles.user__avatar} style={{ backgroundImage: `url(${el.photos.small !== null ? el.photos.small : 'https://www.gourmandize.com/uploads/article/59/f3/6e/62/mcdonalds-2.png?1505483069'})` }}></div>
                </div>

                <div className={styles.user__col}>
                  <div className={styles.user__name}>
                    {el.name}
                  </div>
                  { !el.followed
                    ? <button onClick={() => {props.follow(el.id)}} className={styles.user__button}>Follow</button>
                    : <button onClick={() => {props.unfollow(el.id)}} className={styles.user__button}>Unfollow</button>
                    }
                </div>
              </div>
            ) 
          })}
        </div>
      }
    </div>
  )
}

export default Users
