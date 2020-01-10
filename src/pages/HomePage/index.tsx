import React, { useState } from 'react'
import style from './index.module.scss'

interface AppHomePageProps {
  children?: any
}

const HomePage = (props: AppHomePageProps) => {

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
    </div>
  )
}

export default HomePage