const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE'

let initialState = {
  chatList: [
    {
      id: 1,
      abbr: 'GK',
      name: 'Gregory Krieger',
      avatar: '',
      messageValue: '',
      messageNewId: 5,
      messages: [
        {
          id: 0,
          user: 1,
          content: 'Hello there Stas !',
          own: false,
        },
        {
          id: 1,
          user: 0,
          content: 'Hello there Gregory !',
          own: true,
        },
        {
          id: 2,
          user: 1,
          content: 'What are you working now ?',
          own: false,
        },
        {
          id: 3,
          user: 0,
          content: 'I\'m working on the chat !',
          own: true,
        },
        {
          id: 4,
          user: 1,
          content: 'Ok, I\'m count on you !',
          own: false,
        },
      ]
    },
    {
      id: 2,
      abbr: 'AF',
      name: 'Anthony Fasano',
      avatar: '',
      messageValue: '',
      messageNewId: 2,
      messages: [
        {
          id: 0,
          user: 0,
          content: 'Hello there Anthony !',
          own: true,
        },
        {
          id: 1,
          user: 2,
          content: 'Hello there Stanislav !',
          own: false,
        },
      ]
    },
    {
      id: 3,
      abbr: 'DN',
      name: 'Denis Nikitin',
      avatar: '',
      messageValue: '',
      messageNewId: 5,
      messages: [
        {
          id: 0,
          user: 0,
          content: 'Hello there Denis !',
          own: true,
        },
        {
          id: 1,
          user: 3,
          content: 'Hello there Catnislav !',
          own: false,
        },
        {
          id: 2,
          user: 0,
          content: 'Do you have any tasks for me ?',
          own: true,
        },
        {
          id: 3,
          user: 3,
          content: 'Yes, I\'m going to call you !',
          own: false,
        },
        {
          id: 4,
          user: 0,
          content: 'I\'m waiting for',
          own: true,
        },
      ]
    },
  ]
}

const messagesReducer = (state = initialState, action) => {
  let newState = {
    ...state,
    chatList: [
      ...state.chatList.map((el, ind) => ({
        ...el,
        messages: [...state.chatList[ind].messages]
      }))
    ],
  }

  switch(action.type) {
    case ADD_MESSAGE:
      const message = {
        id: action.id,
        user: 0,
        content: action.content.trim(),
        own: true
      }
  
      if (message.content) {
        newState.chatList[action.index].messages.push(message)
        newState.chatList[action.index].messageNewId++
      }
      
      // state.dispatch({type: SET_MESSAGE_VALUE, index: action.index, value: ''})
      newState.chatList[action.index].messageValue = ''
      return newState
    case SET_MESSAGE_VALUE:
      newState.chatList[action.index].messageValue = action.value
      return newState
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

export const onChangeMessageValueActionCreator = (chatIndex, messageValue) => ({
  type: SET_MESSAGE_VALUE,
  index: chatIndex,
  value: messageValue
})

export default messagesReducer