import React from 'react'
import CommentGroup from './Comment/CommentGroup'
import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__background} style={{ backgroundImage: 'url(https://www.thehecticvegan.com/wp-content/uploads/2020/08/McDonalds-Vegan-Menu.jpg)'}}></div>

      <div className={styles.profile__title}>
        Profile
      </div>

      <CommentGroup />
    </div>
  )
}

export default Profile