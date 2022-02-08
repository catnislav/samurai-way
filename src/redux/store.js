const ADD_COMMENT = 'ADD_COMMENT'
const SET_COMMENT_VALUE = 'SET_COMMENT_VALUE'
const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE'

let store = {
  _state: {
    userList: [
      {
        id: 0,
        abbr: 'SP',
        name: 'Stanislav Petrov',
        avatar: 'https://i.ytimg.com/vi/JbBUlojyvhs/maxresdefault.jpg',
      },
      {
        id: 1,
        abbr: 'GK',
        name: 'Gregory Krieger',
        avatar: 'https://www.highsnobiety.com/static-assets/wp-content/uploads/2021/10/20190855/kanye-west-mcdonalds-meal-main.gif',
      },
      {
        id: 2,
        abbr: 'AF',
        name: 'Anthony Fasano',
        avatar: 'https://i.ytimg.com/vi/LPN1XGZzf98/maxresdefault.jpg',
      },
      {
        id: 3,
        abbr: 'DN',
        name: 'Denis Nikitin',
        avatar: 'https://content.fortune.com/wp-content/uploads/2020/11/McDonalds-CEO_Chris-Kempczinski_web.jpg',
      },
    ],
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
    ],
    commentList: [
      {
        id: 0,
        user: 2,
        content: 'Wow ! I like the service !',
        likes: 56,
      },
      {
        id: 1,
        user: 1,
        content: 'Hello there guys ! Thank you for the coffe with milk ! I mean cappuccino !',
        likes: 7,
      },
      {
        id: 2,
        user: 3,
        content: 'I like it !',
        likes: 99,
      },
    ],
    commentValue: '',
    commentListNewId: 3,
  },
  _rerender() {
    console.log('rerender')
  },

  getState() {
    return this._state
  },
  // observer
  setRender (render) {
    this._rerender = render;
  },

  // addComment(
  //   id = this._state.commentListNewId,
  //   user = 0,
  //   content = this._state.commentValue,
  //   likes = 0
  // ) {
  //   const comment = {
  //     id,
  //     user,
  //     content,
  //     likes,
  //   }
  
  //   content && this._state.commentList.push(comment) && (this.setCommentValue(''))
  
  //   this._state.commentListNewId++
  
  //   this._rerender()
  // },
  // setCommentValue(value) {
  //   this._state.commentValue = value
  
  //   this._rerender()
  // },

  dispatch(action) {
    if (action.type === 'ADD_COMMENT') {

      const comment = {
        id: this._state.commentListNewId,
        user: 0,
        content: this._state.commentValue,
        likes: 0
      }

      comment.content && this._state.commentList.push(comment) && this.dispatch({type: 'SET_COMMENT_VALUE', value: ''})

      this._state.commentListNewId++

    } else if (action.type === 'SET_COMMENT_VALUE') {

      this._state.commentValue = action.value

    } else if (action.type === 'ADD_MESSAGE') {

      const message = {
        id: action.id,
        user: 0,
        content: action.content.trim(),
        own: true
      }

      if (message.content) {
        this._state.chatList[action.index].messages.push(message)
        this._state.chatList[action.index].messageNewId++
      }
      
      this.dispatch({type: 'SET_MESSAGE_VALUE', index: action.index, value: ''})

    } else if (action.type === 'SET_MESSAGE_VALUE') {

      this._state.chatList[action.index].messageValue = action.value

    }

    this._rerender()
  }
}

export const addCommentActionCreator = () => ({type: ADD_COMMENT})

export const setCommentValueActionCreator = (commentValue) => ({type: SET_COMMENT_VALUE, value: commentValue})

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

window.store = store

export default store
