import React from 'react'
import styles from './Nav.module.scss'
import CustomLink from '../CustomLink/CustomLink'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__block}>
        <CustomLink className={styles.nav__block__item} to="/">Profile</CustomLink>
        <CustomLink className={styles.nav__block__item} to="/messages">Messages</CustomLink>
        <CustomLink className={styles.nav__block__item} to="/news">News</CustomLink>
        <CustomLink className={styles.nav__block__item} to="/music">Music</CustomLink>
      </div>
      <div className={styles.nav__block}>
        <CustomLink to="/users">Users</CustomLink>
      </div>
      <div className={styles.nav__block}>
        <CustomLink to="/settings">Settings</CustomLink>
      </div>
    </nav>
  )
}

export default Nav
