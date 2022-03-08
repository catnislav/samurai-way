import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './Main.module.scss'
import Messages from './Messages/Messages'
import Music from './Music/Music'
import News from './News/News'
import UsersContainer from './Users/UsersContainer'
import Profile from './Profile/Profile'
import Settings from './Settings/Settings'

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/messages/*" element={<Messages />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  )
}

export default Main