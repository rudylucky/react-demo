import React from 'react'

import style from './index.module.scss'

const AppFooter = () => {

  return (
    <div className={style.appFooter} id={style.appFooter}>
      <div className={style.footerContainer}>

        <div className={style.infoContainer}>
          <div className={style.interest} >感兴趣请联系我</div>
          <div className={style.interestEn}>CONTACT ME IF YOU ARE INTERESTED</div>

          <div className={style.name}>姓名：刘迪</div>
          <div className={style.address}>所在地：上海市徐汇区光启文化广场</div>
          <div className={style.telephone}>联系电话：15317253534</div>
          <div className={style.email}>rudylucky@163.com</div>
        </div>
        <div className={style.declare}>
        </div>
        <div className={style.qrCode}></div>
      </div>
    </div>
  )
}

export default AppFooter