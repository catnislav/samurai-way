import React from 'react'
import styles from './Messages.module.scss'
import Chat from './Chat/Chat'

const Messages = () => {
  return (
    <div className={styles.messages}>
      <div className={styles.messages__title}>
        Messages
      </div>

      <Chat />
    </div>
  )
}

export default Messages