import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useEffect } from 'react'
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
  className?: string
}

const AppModal = (props: IModelProps) => {

  const { visible, setVisible, className } = props

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

  const escapPreessHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 27 && visible === true) {
      setVisible(false)
    }
  }

  useEffect(() => {
    if (visible === true) {
      window.addEventListener('keyup', escapPreessHandler)
    } else {
      // TODO: not work!!!
      window.removeEventListener('keyup', escapPreessHandler)
    }
  }, [visible])

  return (
    <>
      {
        visible &&
          <div className={style.background}>
            <div className={`${style.modal ?? ''} ${className ?? ''}`}>
              <div className={style.title}>
                <span>{props.title}</span>
              </div>
              <FontAwesomeIcon onClick={cancel} className={style.closeButton} icon={faWindowClose} />
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