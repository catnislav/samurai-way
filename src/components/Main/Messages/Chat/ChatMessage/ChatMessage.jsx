import React from 'react'
import styles from './ChatMessage.module.scss'

const ChatMessage = ({avatar, abbr, content, own = false}) => {
  const anyClass = React.useMemo(() => {
    return own ? [styles.ChatMessage, styles.ChatMessageOwn].join(' ') : styles.ChatMessage
  }, [own])

  return (
    <div className={anyClass}>
      <div className={styles.ChatMessage__avatar}>
        <div className={styles.ChatMessage__avatar__image} style={{ backgroundImage: `url(${avatar})` }}></div>
        {abbr}
      </div>

      <div className={styles.ChatMessage__content}>
        {content}
      </div>
    </div>
  )
}

export default ChatMessage