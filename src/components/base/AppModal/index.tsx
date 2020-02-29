import React from 'react'

import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

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

  const showFooter = (typeof props.cancel === 'function') || (typeof props.confirm === 'function')

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
                <span>{props.title}</span>
                <FontAwesomeIcon onClick={cancel} className={style.closeButton} icon={faWindowClose} />
              </div>
              <div className={style.content}>
                {props.children}
              </div>
              {
                showFooter &&
                <div className={style.foot}>
                  <button onClick={confirm}>{props.confirmText ?? '确定'}</button>
                  <button onClick={cancel}>{props.cancelText ?? '取消'}</button>
                </div>
              }
            </div>
          </div>
      }
    </>

  )
}

export default AppModal