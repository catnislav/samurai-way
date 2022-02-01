import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './Chat.module.scss'
import ChatMessage from './ChatMessage/ChatMessage'
import CustomLink from '../../../CustomLink/CustomLink'
import state from '../../../../redux/state'

const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__list}>
        { state.chatList.map(el => <CustomLink key={el.id} className={styles.chat__list__item} to={`/messages/${el.id}`}>{el.name}</CustomLink>) }
      </div>

      <div className={styles.chat__messages}>
        <Routes>
          { state.chatList.map(el => {
             return (
              <Route key={el.id} path={`/${el.id}`} element={
                <React.Fragment>
                  { el.messages?.map(elm => {
                    return (
                      <ChatMessage
                        key={elm.id}
                        avatar={state.userList[elm.user].avatar}
                        abbr={state.userList[elm.user].abbr}
                        content={elm.content}
                        own={elm.own}
                      />
                    )
                  })}
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