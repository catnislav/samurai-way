import React from 'react'
import Comment from './Comment.jsx'
import CommentForm from './CommentForm.jsx'
import styles from './Comment.module.scss'
import store from '../../../../redux/store'
import { addCommentActionCreator, setCommentValueActionCreator } from '../../../../redux/profileReducer'

const CommentGroup = () => {
  const commentRef = React.createRef()
  
  const onClickAddComment = () => {
    store.dispatch(addCommentActionCreator())
  }

  const setCommentValue = (commentValue) => {
    // store.dispatch({type: 'SET-COMMENT-VALUE', value: textareaValue})
    store.dispatch(setCommentValueActionCreator(commentValue))
  }

  return (
    <div className={styles.commentGroup}>
      <CommentForm textareaRef={commentRef} textareaValue={store.getState().profile.commentValue} setTextareaValue={setCommentValue} onClickAddComment={onClickAddComment} />
      {store.getState().profile.commentList.map(el => {
        return <Comment key={el.id} avatar={store.getState().userList[el.user].avatar} content={el.content} likes={el.likes} />
      })}
    </div>
  )
}

export default CommentGroup
