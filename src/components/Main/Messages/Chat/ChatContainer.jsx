import React from 'react'
import Chat from './Chat'
// import store from '../../../../redux/store'
import store from '../../../../redux/reduxStore'
import { addMessageActionCreator, onChangeMessageValueActionCreator } from '../../../../redux/messagesReducer'

const ChatContainer = () => {
  const onClickAddMessage = (chatIndex, messageNewId, messageValue) => {
    store.dispatch(addMessageActionCreator(chatIndex, messageNewId, messageValue))
  }

  const onChangeMessageValue = (chatIndex, messageValue) => {
    store.dispatch(onChangeMessageValueActionCreator(chatIndex, messageValue))
  }

  return <Chat
    messagesStore={store.getState().messages}
    usersStore={store.getState().users}
    onClickAddMessage={onClickAddMessage}
    onChangeMessageValue={onChangeMessageValue}
  />
}

export default ChatContainer
