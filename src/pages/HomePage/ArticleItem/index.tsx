import React from 'react'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { IArticleEntity } from 'services/ArticleService'

type ArticleItemProps = IArticleEntity & {
  comments: number
  reads: number
  date: Date
}

export function ArticleItem(props: ArticleItemProps) {

  const { title, abstract, date, upVote, comments, reads, code } = props

  return (
    <div className={style.articleItem}>
      <a className={style.toArticle} href={'/article/detail/' + code}>
        <div title={title} className={style.title}>{title}</div>
        <div className={style.content}>{abstract}</div>
      </a>
      <div className={style.bottom}>
        <span className={style.dateContainer}>发布时间：{date.toLocaleDateString()}</span>
        <span className={style.buttonContainer}>
          <span>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{upVote ?? 0}</span>
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