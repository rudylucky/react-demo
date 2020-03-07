import React from 'react'
import style from './index.module.scss'

const CommentFrame = () => {

  return (
    <>
      <div className={style.commentFrame}>
        <textarea className={style.textarea} />
        <button className={style.button}>评论</button>
      </div>
    </>
  )
}

export default CommentFrame