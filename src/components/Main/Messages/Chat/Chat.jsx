import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './Chat.module.scss'
import ChatMessage from './ChatMessage/ChatMessage'
import CustomLink from '../../../CustomLink/CustomLink'
import ChatMessageForm from './ChatMessage/ChatMessageForm'

const Chat = ({messagesStore, usersStore, onClickAddMessage, onChangeMessageValue}) => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__list}>
        { messagesStore.chatList.map(el => <CustomLink key={el.id} className={styles.chat__list__item} to={`/messages/${el.id}`}>{el.name}</CustomLink>) }
      </div>

      <div className={styles.chat__messages}>
        <Routes>
          { messagesStore.chatList.map((el, ind) => {
             return (
              <Route key={el.id} path={`/${el.id}`} element={
                <React.Fragment>
                  { el.messages?.map(elm => {
                    return (
                      <ChatMessage
                        key={elm.id}
                        avatar={usersStore[elm.user].avatar}
                        abbr={usersStore[elm.user].abbr}
                        content={elm.content}
                        own={elm.own}
                      />
                    )
                  })}
                  <ChatMessageForm
                    chatIndex={ind}
                    messageValue={el.messageValue}
                    messageNewId={el.messageNewId}
                    onClickAddMessage={onClickAddMessage}
                    onChangeMessageValue={onChangeMessageValue}
                  />
                </React.Fragment>
              } />
            )
          })}
        </Routes>
      </div>
    </div>
  )
}

export default Chat
