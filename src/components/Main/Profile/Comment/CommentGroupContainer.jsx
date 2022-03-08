// import React from 'react'
import CommentGroup from './CommentGroup'
// import store from '../../../../redux/store'
// import store from '../../../../redux/reduxStore'
import { addCommentActionCreator, onChangeCommentValueActionCreator } from '../../../../redux/profileReducer'
import { connect } from 'react-redux'

// const CommentGroupContainer = ({store}) => {
//   const onClickAddComment = () => {
//     store.dispatch(addCommentActionCreator())
//   }

//   const onChangeCommentValue = (commentValue) => {
//     // store.dispatch({type: 'SET-COMMENT-VALUE', value: textareaValue})
//     store.dispatch(onChangeCommentValueActionCreator(commentValue))
//   }

//   return (
//     <CommentGroup
//       onClickAddComment={onClickAddComment}
//       onChangeCommentValue={onChangeCommentValue}
//       profileStore={store.getState().profile}
//       usersStore={store.getState().users}
//     />
//   )
// }

let mapStateToProps = (state) => ({
  profileStore: state.profile,
  usersStore: state.users
})

let mapDispatchToProps = (dispatch) => ({
  onClickAddComment: () => {
    dispatch(addCommentActionCreator())
  },
  onChangeCommentValue: (commentValue) => {
    dispatch(onChangeCommentValueActionCreator(commentValue))
  }
})

const CommentGroupContainer = connect(mapStateToProps, mapDispatchToProps)(CommentGroup)

export default CommentGroupContainer
