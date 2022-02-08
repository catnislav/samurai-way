import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './Chat.module.scss'
import ChatMessage from './ChatMessage/ChatMessage'
import CustomLink from '../../../CustomLink/CustomLink'
import ChatMessageForm from './ChatMessage/ChatMessageForm'

import store from '../../../../redux/store'

const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__list}>
        { store.getState().chatList.map(el => <CustomLink key={el.id} className={styles.chat__list__item} to={`/messages/${el.id}`}>{el.name}</CustomLink>) }
      </div>

      <div className={styles.chat__messages}>
        <Routes>
          { store.getState().chatList.map((el, ind) => {
             return (
              <Route key={el.id} path={`/${el.id}`} element={
                <React.Fragment>
                  { el.messages?.map(elm => {
                    return (
                      <ChatMessage
                        key={elm.id}
                        avatar={store.getState().userList[elm.user].avatar}
                        abbr={store.getState().userList[elm.user].abbr}
                        content={elm.content}
                        own={elm.own}
                      />
                    )
                  })}
                  <ChatMessageForm chatIndex={ind} messageValue={el.messageValue} messageNewId={el.messageNewId} />
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
