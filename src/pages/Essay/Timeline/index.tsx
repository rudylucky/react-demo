import React from 'react'
import { Link } from 'react-router-dom'
import { IArticleEntity } from 'services/ArticleService'
import style from './index.module.scss'

interface ITimeLineProps {
  data: Array<IArticleEntity>
}

const Timeline = (props: ITimeLineProps) => {

  const { data } = props

  return <div className={style.timeline}>
    {
      data.map(v => <TimeItem
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
    <Link to={'article/detail/' + code}>
      <span className={style.date}>{date}</span>
      <span className={style.content}>
        {content}
      </span>
    </Link>
  </div>
}

export default Timeline