import React from 'react'
import Comment from './Comment.jsx'
import CommentForm from './CommentForm.jsx'
import styles from './Comment.module.scss'

const CommentGroup = ({onClickAddComment, onChangeCommentValue, profileStore, usersStore}) => {
  const commentRef = React.createRef()

  return (
    <div className={styles.commentGroup}>
      <CommentForm textareaRef={commentRef} textareaValue={profileStore.commentValue} onChangeTextareaValue={onChangeCommentValue} onClickAddComment={onClickAddComment} /> 
      {profileStore.commentList.map(el => {
        return <Comment key={el.id} avatar={usersStore.usersList[el.user].avatar} content={el.content} likes={el.likes} />
      })}
    </div>
  )
}

export default CommentGroup
