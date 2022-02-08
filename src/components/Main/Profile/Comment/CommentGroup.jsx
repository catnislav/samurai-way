import React from 'react'
import Comment from './Comment.jsx'
import CommentForm from './CommentForm.jsx'
import styles from './Comment.module.scss'
import store from '../../../../redux/store'
import { addCommentActionCreator, setCommentValueActionCreator } from '../../../../redux/store'

const CommentGroup = () => {
  const commentRef = React.createRef()
  
  const onClickAddComment = () => {
    // let comment = textareaRef.current.value

    // addComment(comment)
    // store.addComment()
    // store.dispatch({type: 'ADD-COMMENT'})
    store.dispatch(addCommentActionCreator())

    // textareaRef.current.value = ''
    // store.setCommentValue('')
  }

  const setCommentValue = (commentValue) => {
    // store.dispatch({type: 'SET-COMMENT-VALUE', value: textareaValue})
    store.dispatch(setCommentValueActionCreator(commentValue))
  }

  return (
    <div className={styles.commentGroup}>
      <CommentForm textareaRef={commentRef} textareaValue={store.getState().commentValue} setTextareaValue={setCommentValue} onClickAddComment={onClickAddComment} />
      {store.getState().commentList.map(el => {
        return <Comment key={el.id} avatar={store.getState().userList[el.user].avatar} content={el.content} likes={el.likes} />
      })}
    </div>
  )
}

export default CommentGroup
