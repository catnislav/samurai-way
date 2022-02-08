import React from 'react'
import CommentGroup from './CommentGroup'
// import store from '../../../../redux/store'
import store from '../../../../redux/reduxStore'
import { addCommentActionCreator, onChangeCommentValueActionCreator } from '../../../../redux/profileReducer'

const CommentGroupContainer = () => {  
  const onClickAddComment = () => {
    store.dispatch(addCommentActionCreator())
  }

  const onChangeCommentValue = (commentValue) => {
    // store.dispatch({type: 'SET-COMMENT-VALUE', value: textareaValue})
    store.dispatch(onChangeCommentValueActionCreator(commentValue))
  }

  return (
    <CommentGroup
      onClickAddComment={onClickAddComment}
      onChangeCommentValue={onChangeCommentValue}
      profileStore={store.getState().profile}
      usersStore={store.getState().users}
    />
  )
}

export default CommentGroupContainer
