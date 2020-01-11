import React from 'react'
import style from './index.module.scss'
import { ArticleEntity } from 'services/ArticleService'

const ArticleItem = (props: ArticleEntity) => {

  return (
    <div className={style.articleItem}>
      <div className={style.img}>
      </div>
      <div className={style.summary}>
        <div className={style.title}>
          {props.title}
        </div>
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