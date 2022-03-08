const ADD_COMMENT = 'ADD_COMMENT'
const SET_COMMENT_VALUE = 'SET_COMMENT_VALUE'

let initialState = {
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
      content: 'I\'m sorry ! Do you have some water ?',
      likes: 99,
    },
  ],
  commentValue: '',
  commentListNewId: 3,
}

const profileReducer = (state = initialState, action) => {
  let newState = {...state}
  newState.commentList = [...state.commentList]

  switch(action.type) {
    case ADD_COMMENT:
      const comment = {
        id: state.commentListNewId,
        user: 0,
        content: state.commentValue.trim(),
        likes: 0
      }
  
      if (comment.content) {
        newState.commentList.push(comment)        
        newState.commentListNewId++
      }

      // state.dispatch({type: SET_COMMENT_VALUE, value: ''})
      newState.commentValue = ''
      return newState
    case SET_COMMENT_VALUE:
      newState.commentValue = action.value
      return newState
    default:
      return state
  }
}

export const addCommentActionCreator = () => ({type: ADD_COMMENT})

export const onChangeCommentValueActionCreator = (commentValue) => ({type: SET_COMMENT_VALUE, value: commentValue})

export default profileReducer