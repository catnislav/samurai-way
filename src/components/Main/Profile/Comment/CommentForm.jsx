import React from 'react'
import styles from './Comment.module.scss'

const CommentForm = ({textareaRef, onClickAddComment}) => {
  return (
    <div className={styles.commentForm}>
      <textarea ref={textareaRef} rows={1} className={styles.commentForm__textarea} placeholder={'Comment'}></textarea>
      <button onClick={onClickAddComment} className={styles.commentForm__button}>Add a comment</button>
    </div>
  )
}

export default CommentForm