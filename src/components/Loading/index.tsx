import React from 'react'
import style from './index.module.scss'

const Loading = () => {

  return <div className={style.loading}>
    <div className={style.bar}></div>
  </div>
}

export default Loading