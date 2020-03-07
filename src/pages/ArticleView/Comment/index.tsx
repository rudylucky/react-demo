import React from 'react'
import CommentFrame from './CommentFrame'
import CommentItem from './CommentItem'
import style from './index.module.scss'

const Comment = () => {

  return (
    <div className={style.comment}>
      <CommentFrame />
      {
        new Array(10).fill(null).map((v, i) => <CommentItem key={i} author='rudylucky' content='评论内容' />)
      }
    </div>
  )
}

export default Comment