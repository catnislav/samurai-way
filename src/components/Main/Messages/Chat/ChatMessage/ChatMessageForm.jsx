import React from 'react'
import styles from '../../../Profile/Comment/Comment.module.scss'

const ChatMessageForm = ({chatIndex, messageNewId, messageValue, onClickAddMessage, onChangeMessageValue}) => {
  const messageRef = React.createRef()

  return (
    <div className={styles.commentForm} style={{marginTop: 'auto'}}>
      <textarea ref={messageRef} rows={1} className={styles.commentForm__textarea} placeholder={'Message'} value={messageValue} onChange={() => onChangeMessageValue(chatIndex, messageRef.current.value)} />
      <button onClick={() => onClickAddMessage(chatIndex, messageNewId, messageValue)} className={styles.commentForm__button}>Add a message</button>
    </div>
  )
}

export default ChatMessageForm