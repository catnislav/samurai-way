import React from 'react'
import styles from './Comment.module.scss'

const Comment = ({avatar, content, likes}) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__avatar} style={{ backgroundImage: `url(${avatar})`}}></div>
      <div className={styles.comment__message}>{content}</div>
      <div className={styles.comment__likes}>{likes}</div>
    </div>
  )
}

export default Comment