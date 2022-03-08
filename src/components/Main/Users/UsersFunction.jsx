import React from 'react'
import styles from './Users.module.scss'
import axios from 'axios'

const UsersFunction = ({follow, unfollow, setUsers, usersList}) => {
  let getUsers = () => {
    if (usersList.length === 0) {
      axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        setUsers(res.data.items)
        console.log(res.data.items)
        console.log('usersList', usersList)
      })
    }
  }

  return (
    <div className={styles.users}>
      <div className={styles.users__title}>
        Users
      </div>

      { usersList.length === 0 ?
        <button onClick={() => getUsers()} className={styles.user__button}>
          Get Users
        </button> : null
      }

      <div className={styles.users__list}>
        { usersList.map(el => {
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
              <div className={styles.user__col}>
                <div className={styles.user__avatar} style={{ backgroundImage: `url(${el.photos.small !== null ? el.photos.small : 'https://www.gourmandize.com/uploads/article/59/f3/6e/62/mcdonalds-2.png?1505483069'})` }}></div>
                  { !el.followed
                    ? <button onClick={() => {follow(el.id)}} className={styles.user__button}>Follow</button>
                    : <button onClick={() => {unfollow(el.id)}} className={styles.user__button}>Unfollow</button>
                  }
              </div>

              <div className={styles.user__block}>
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
              </div>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default UsersFunction