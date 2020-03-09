import React from 'react'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

interface ArticleItemProps {
  code?: string
  thumbs: number
  comments: number
  reads: number
  title: string
  abstract: string
  date: Date
}

export function ArticleItem(props: ArticleItemProps) {

  const { title, abstract, date, thumbs, comments, reads, code } = props

  if (!title) {
    return <div className={style.articleItem} style={{ opacity: 0 }}>{'a'.repeat(200)}</div>
  }

  return (
    <div className={style.articleItem}>
      <a className={style.toArticle} href={'/article/detail/' + code}>
        <div className={style.title}>{title}</div>
        <div className={style.content}>{abstract}</div>
      </a>
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