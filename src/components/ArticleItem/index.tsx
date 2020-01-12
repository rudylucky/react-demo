import React from 'react'
import style from './index.module.scss'
import { IArticleEntity } from 'services/ArticleService'

const ArticleItem = (props: IArticleEntity) => {

  return (
    <div className={style.articleItem}>
      <div className={style.img}>
      </div>
      <div className={style.summary}>
        <a href={'/article/detail/' + props.code} className={style.title}>
          {props.title}
        </a>
        <div className={style.createTime}>
          {props.createTime}
        </div>
        <div className={style.abstract}>
          {props.abstract}
        </div>
      </div>
    </div>
  )
}
export default ArticleItem