import React from 'react'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

interface ArticleItemProps {
  thumbs: number
  comments: number
  reads: number
  title: string
  abstract: string
  date: Date
}

export function ArticleItem(props: ArticleItemProps) {

  const { title, abstract, date, thumbs, comments, reads } = props

  return (
    <div className={style.articleItem}>
      <div className={style.title}>{title}</div>
      <div className={style.content}>{abstract}</div>
      <div className={style.bottom}>
        <span className={style.dateContainer}>发布时间：{date.toLocaleDateString()}</span>
        <span className={style.buttonContainer}>
          <span>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{thumbs}</span>
          </span>
          <span>
            <FontAwesomeIcon icon={faCommentDots} />
            <span>{comments}</span>
          </span>
          <span>
            <FontAwesomeIcon icon={faEye} />
            <span>{reads}</span>
          </span>
        </span>
      </div>
    </div>
  )
}
export default ArticleItem