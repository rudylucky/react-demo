import React, { useState } from 'react'

import style from './index.module.scss'

interface AppHomePage {
  children?: any
}

const HomePage = (props: AppHomePage) => {

  return (
    <div className={style.homePage}>
      <div className={style.imgContainer}>
        <div className={style.slide}>1
          {/* <img src="https://i.loli.net/2019/12/26/MxjikTyo3QlDUdp.jpg" width="100%"></img> */}
        </div>
        <div className={style.slide}>2</div>
        <div className={style.slide}>3</div>
        <div className={style.slide}>4</div>
        <div className={style.slide}>5</div>
      </div>
    </div>
  )
}

export default HomePage