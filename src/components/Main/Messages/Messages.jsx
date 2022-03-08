import React from 'react'
import styles from './Messages.module.scss'
import ChatContainer from './Chat/ChatContainer'
import StoreContext from '../../../StoreContext'

const Messages = () => {
  return (
    <div className={styles.messages}>
      <div className={styles.messages__title}>
        Messages
      </div>

      <StoreContext.Consumer>
        { value => <ChatContainer store={value} /> }
      </StoreContext.Consumer>
    </div>
  )
}

export default Messages