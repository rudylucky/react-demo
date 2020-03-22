import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
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

const AppModal = ({
  cancel, visible, setVisible, title, children,
  confirmText, cancelText, className = '', confirm
}: IModelProps) => {

  const showFooter = (typeof cancel === 'function') || (typeof confirm === 'function')

  const handleCancel = () => {
    cancel && cancel()
    setVisible(false)
  }

  const handleConfirm = () => {
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
          <div className={`${style.modal} ${className}`}>
            <div className={style.title}>
              <span>{title}</span>
            </div>
            <FontAwesomeIcon onClick={handleCancel} className={style.closeButton} icon={faWindowClose} />
            <div className={style.content}>
              {children}
            </div>
            {
              showFooter &&
              <div className={style.foot}>
                <button onClick={handleConfirm}>{confirmText ?? '确定'}</button>
                <button onClick={handleCancel}>{cancelText ?? '取消'}</button>
              </div>
            }
          </div>
        </div>
      }
    </>

  )
}

export default AppModal