import React from 'react'

import style from './index.module.scss'

const AppFooter = () => {

  return (
    <div className={style.appFooter} id={style.appFooter}>
      <div className={style.infoContainer}>
        <div>感兴趣请联系我</div>
        <div>CONTACT ME IF YOU ARE INTERESTED</div>

        <div>所在地：上海市徐汇区光启文化广场</div>
        <div>联系电话：15317253534</div>
        <div>rudylucky@163.com</div>
      </div>
      <div className={style.declare}>
      </div>
      <div className={style.qrCodeContainer}>
        <div className={style.qrCode}></div>
      </div>
    </div>
  )
}

export default AppFooter