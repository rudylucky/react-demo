import React from 'react'
import style from './index.module.scss'

const Timeline = () => {
  return <div className={style.timeline}>
    <div className={style.timeItem}>
      <div className={style.bar}></div>
      <span className={style.date}>{new Date().toLocaleDateString()}</span>
      <span className={style.content}>准备做随笔的时间线功能</span>
    </div>
    <div className={style.timeItem}>
      <div className={style.bar}></div>
    </div>
    <div className={style.timeItem}>
      <div className={style.bar}></div>
    </div>
    <div className={style.timeItem}>
      <div className={style.bar}></div>
    </div>
    <div className={style.timeItem}>
      <div className={style.bar}></div>
    </div>
  </div>
}

export default Timeline