import React from 'react'
import style from './Comment.module.scss'
import { ICommentEntity } from 'services/CommentService'

const Comment = (props: ICommentEntity) => {

  const { author, content, createTime } = props

  return (
    <div className={style.comment}>
      <div className={style.firstLine}>
        <span className={style.userName}>
          {author + ' : '}
        </span>
        <span className={style.date}>
          {createTime}
        </span>
        <span className={style.react}>
          <span className={style.reply}>回复</span>
          <span className={style.upVote}>点赞</span>
        </span>
      </div>
      <div className={style.secondLine}>
        {content}
      </div>
    </div>
  )
}

export default Comment