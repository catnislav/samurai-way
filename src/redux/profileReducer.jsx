const ADD_COMMENT = 'ADD_COMMENT'
const SET_COMMENT_VALUE = 'SET_COMMENT_VALUE'

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_COMMENT:
      const comment = {
        id: state.commentListNewId,
        user: 0,
        content: state.commentValue.trim(),
        likes: 0
      }
  
      if (comment.content) {
        state.commentList.push(comment)        
        state.commentListNewId++
      }

      // state.dispatch({type: SET_COMMENT_VALUE, value: ''})
      state.commentValue = ''
      return state
    case SET_COMMENT_VALUE:
      state.commentValue = action.value
      return state
    default:
      return state
  }
}

export const addCommentActionCreator = () => ({type: ADD_COMMENT})

export const setCommentValueActionCreator = (commentValue) => ({type: SET_COMMENT_VALUE, value: commentValue})

export default profileReducer