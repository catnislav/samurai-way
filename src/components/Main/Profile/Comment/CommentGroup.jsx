import React from 'react'
import Comment from './Comment.jsx'
import CommentForm from './CommentForm.jsx'
import styles from './Comment.module.scss'
import state from '../../../../redux/state'
import {addComment} from '../../../../redux/state'

const CommentGroup = () => {
  const textareaRef = React.createRef()
  
  const onClickAddComment = () => {
    debugger
    
    let comment = textareaRef.current.value

    addComment(comment)
  }

  return (
    <div className={styles.commentGroup}>
      <CommentForm textareaRef={textareaRef} onClickAddComment={onClickAddComment} />

      {state.commentList.map(el => {
         return <Comment key={el.id} avatar={state.userList[el.user].avatar} content={el.content} likes={el.likes} />
      })}
    </div>
  )
}

export default CommentGroup
