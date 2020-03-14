import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import ArticleService, { IArticleEntity } from 'services/ArticleService'
import { Link } from 'react-router-dom'

const Timeline = () => {

  const articleService = ArticleService.getInstance()

  const [articleList, setArticleList] = useState <Array<IArticleEntity>>([])

  useEffect(() => {
    (async () => {
      const list = await articleService.list()
      setArticleList(list)
    })()
  }, [])

  return <div className={style.timeline}>
    {
      articleList.map(v => <TimeItem
        key={v.code}
        date={v.createTime}
        content={v.title}
        code={v.code}
      />)
    }
  </div>
}

interface ITimeItemProps {
  date?: string
  content?: string
  code?: string
}

export const TimeItem = (props: ITimeItemProps) => {

  const { date, content, code } = props

  return <div className={style.timeItem}>
    <div className={style.bar}></div>
    <span className={style.date}>{date}</span>
    <span className={style.content}>
      <Link to={'article/detail/' + code}>{content}</Link>
    </span>
  </div>
}

export default Timeline