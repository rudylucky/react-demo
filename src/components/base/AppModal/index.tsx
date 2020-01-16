import React, { useState, useEffect } from 'react'

import style from './index.module.scss'

export interface IModelProps {
  children?: any
  title?: string
  confirm?: Function
  cancel?: Function
  confirmText?: string
  cancelText?: string
  visible: boolean
  setVisible: Function
}

const AppModal = (props: IModelProps) => {

  const { visible, setVisible } = props

  const cancel = () => {
    const cancel = props.cancel
    cancel && cancel()
    setVisible(false)
  }

  const confirm = () => {
    const confirm = props.confirm
    confirm && confirm()
    setVisible(false)
  }
  return (
    <>
      {
        visible &&
          <div className={style.background}>
            <div className={style.model}>
              <div className={style.title}>
                {props.title || '请输入内容'}
              </div>
              <div className={style.content}>
                {props.children}
              </div>
              <div className={style.foot}>
                <button onClick={confirm}>{props.confirmText || '确定'}</button>
                <button onClick={cancel}>{props.cancelText || '取消'}</button>
              </div>
            </div>
          </div>
      }
    </>

  )
}

export default AppModal