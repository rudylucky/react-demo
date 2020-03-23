import React from 'react'
import style from './index.module.scss'

export interface INoticeProps {
  title?: string
  content?: string
}

const Notice = ({ title, content }: INoticeProps) => {

  return <div className={style.notice}>
    {title && <div>{title}</div>}
    {content && <div>{content}</div>}
  </div>
}

export default Notice