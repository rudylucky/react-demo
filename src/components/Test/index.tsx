import React from 'react'

import style from './index.module.scss'

export interface TestProps {

}

const Test = (props: TestProps) => {
  return (
    <div className={style.test}>
      <div className={style.rotateOut}>
        <div className={style.rotateIn}></div>
      </div>
      <div className={style.slideOut}>
        <div className={style.slideIn}>
        </div>
      </div>
    </div>
  )
}

export default Test