import React from 'react'
import style from './Comment.module.scss'
import { ICommentEntity } from 'services/CommentService'

const Comment = (props: ICommentEntity) => {

  const { author, content, createTime } = props

  return (
    <div className={style.comment}>
      <div className={style.firstLine}>
        <span className={style.userName}>
          {author}
        </span>
          :
        <span className={style.date}>
          {createTime}
        </span>
      </div>
      <div className={style.secondLine}>
        <span className={style.userAgent}>
          Opera avira 65.0.3467.48
        </span>
          -
        <span className={style.osVersion}>
          Windows 10 x64 Edition
        </span>
      </div>
      <div className={style.thirdLine}>
        {content}
      </div>
    </div>
  )
}

export default Comment