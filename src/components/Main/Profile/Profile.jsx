import React from 'react'
import CommentGroupContainer from './Comment/CommentGroupContainer'
import styles from './Profile.module.scss'
import StoreContext from '../../../StoreContext'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__background} style={{ backgroundImage: 'url(https://www.thehecticvegan.com/wp-content/uploads/2020/08/McDonalds-Vegan-Menu.jpg)'}}></div>

      <div className={styles.profile__title}>
        Profile
      </div>

      <StoreContext.Consumer>
        { value => <CommentGroupContainer store={value} /> }
      </StoreContext.Consumer>
    </div>
  )
}

export default Profile