import React from 'react'
import style from './index.module.scss'

const AboutMe = () => {

  return <div className={style.aboutme}>
    <div className={style.infoContainer}>
      <div className={style.content}>
        建立这个博客的初衷，是想记录工作和生活的点点滴滴，希望能坚持下来
      </div>
      <div className={style.author}>
        ____ 来自一个小白
      </div>
    </div>
  </div>
}

export default AboutMe