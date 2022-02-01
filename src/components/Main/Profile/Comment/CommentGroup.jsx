import React from 'react'
import Comment from './Comment.jsx'
import CommentForm from './CommentForm.jsx'
import styles from './Comment.module.scss'
import state from '../../../../redux/state'

const CommentGroup = () => {
  const textareaRef = React.createRef()
  const commentsGroupRef = React.createRef()
  
  const onClickAddComment = () => {
    console.log(textareaRef.current.value)
  }

  return (
    <div ref={commentsGroupRef} className={styles.commentGroup}>
      <CommentForm textareaRef={textareaRef} onClickAddComment={onClickAddComment} />

      {state.commentList.map(el => {
         return <Comment avatar={state.userList[el.user].avatar} content={el.content} likes={el.likes} />
      })}
    </div>
  )
}

export default CommentGroup
