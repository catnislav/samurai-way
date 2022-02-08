const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE'

const messagesReducer = (state, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      const message = {
        id: action.id,
        user: 0,
        content: action.content.trim(),
        own: true
      }
  
      if (message.content) {
        state.chatList[action.index].messages.push(message)
        state.chatList[action.index].messageNewId++
      }
      
      // state.dispatch({type: SET_MESSAGE_VALUE, index: action.index, value: ''})
      state.chatList[action.index].messageValue = ''
      return state
    case SET_MESSAGE_VALUE:
      state.chatList[action.index].messageValue = action.value
      return state
    default:
      return state
  }
}

export const addMessageActionCreator = (chatIndex, messageNewId, messageValue) => ({
  type: ADD_MESSAGE,
  index: chatIndex,
  id: messageNewId,
  content: messageValue
})

export const setMessageValueActionCreator = (chatIndex, messageValue) => ({
  type: SET_MESSAGE_VALUE,
  index: chatIndex,
  value: messageValue
})

export default messagesReducer