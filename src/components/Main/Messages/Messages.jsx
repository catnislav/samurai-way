import React from 'react'
import styles from './Messages.module.scss'
import ChatContainer from './Chat/ChatContainer'

const Messages = () => {
  return (
    <div className={styles.messages}>
      <div className={styles.messages__title}>
        Messages
      </div>

      <ChatContainer />
    </div>
  )
}

export default Messages