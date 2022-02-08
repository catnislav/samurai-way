import React from 'react'
import styles from '../../../Profile/Comment/Comment.module.scss'
import store from '../../../../../redux/store'
import { addMessageActionCreator, setMessageValueActionCreator } from '../../../../../redux/messagesReducer'

const ChatMessageForm = ({chatIndex, messageValue, messageNewId}) => {
  const messageRef = React.createRef()

  const onClickAddMessage = () => {
    store.dispatch(addMessageActionCreator(chatIndex, messageNewId, messageValue))
  }

  const setMessageValue = (messageValue) => {
    store.dispatch(setMessageValueActionCreator(chatIndex, messageValue))
  }

  return (
    <div className={styles.commentForm} style={{marginTop: 'auto'}}>
      <textarea ref={messageRef} rows={1} className={styles.commentForm__textarea} placeholder={'Message'} value={messageValue} onChange={() => setMessageValue(messageRef.current.value)} />
      <button onClick={onClickAddMessage} className={styles.commentForm__button}>Add a message</button>
    </div>
  )
}

export default ChatMessageForm