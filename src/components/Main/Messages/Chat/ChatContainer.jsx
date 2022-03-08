// import React from 'react'
import Chat from './Chat'
// import store from '../../../../redux/store'
// import store from '../../../../redux/reduxStore'
import { addMessageActionCreator, onChangeMessageValueActionCreator } from '../../../../redux/messagesReducer'
import { connect } from 'react-redux'

// const ChatContainer = ({store}) => {
//   const onClickAddMessage = (chatIndex, messageNewId, messageValue) => {
//     store.dispatch(addMessageActionCreator(chatIndex, messageNewId, messageValue))
//   }

//   const onChangeMessageValue = (chatIndex, messageValue) => {
//     store.dispatch(onChangeMessageValueActionCreator(chatIndex, messageValue))
//   }

//   return <Chat
//     messagesStore={store.getState().messages}
//     usersStore={store.getState().users}
//     onClickAddMessage={onClickAddMessage}
//     onChangeMessageValue={onChangeMessageValue}
//   />
// }

let mapStateToProps = (state) => ({
  messagesStore: state.messages,
  usersStore: state.users
})
let mapDispatchToProps = (dispatch) => ({
  onClickAddMessage: (chatIndex, messageNewId, messageValue) => {
    dispatch(addMessageActionCreator(chatIndex, messageNewId, messageValue))
  },
  onChangeMessageValue: (chatIndex, messageValue) => {
    dispatch(onChangeMessageValueActionCreator(chatIndex, messageValue))
  }
})

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer
