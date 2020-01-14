import React from 'react'

import style from './index.module.scss'

export interface IModelProps {

}

const AppModel = (props: IModelProps) => {

  return (
    <div className={style.background}>
      <div className={style.model}>
        <div className={style.title}>
        </div>
        <div className={style.content}>
        </div>
      </div>
    </div>
  )
}