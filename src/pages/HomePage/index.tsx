import React, { useState } from 'react'
import style from './index.module.scss'
import ArticleList from 'components/ArticleList'

interface IHomePageProps {
  children?: any
}

const HomePage = (props: IHomePageProps) => {

  return (
    <div className={style.homePage}>
      <div className={style.imgContainer}>
        <div className={style.slide}>
          <img src="https://i.loli.net/2019/12/26/MxjikTyo3QlDUdp.jpg" width="100%"></img>
        </div>
        <div className={style.slide}>
          <img src="https://i.loli.net/2019/12/26/MxjikTyo3QlDUdp.jpg" width="100%"></img>
        </div>
        <div className={style.slide}>
          <img src="https://i.loli.net/2019/12/26/MxjikTyo3QlDUdp.jpg" width="100%"></img>
        </div>
        <div className={style.slide}>
          <img src="https://i.loli.net/2019/12/26/MxjikTyo3QlDUdp.jpg" width="100%"></img>
        </div>
        <div className={style.slide}>
          <img src="https://i.loli.net/2019/12/26/MxjikTyo3QlDUdp.jpg" width="100%"></img>
        </div>
      </div>
      <div className={style.articleList}>
        <ArticleList />
      </div>
    </div>
  )
}

export default HomePage