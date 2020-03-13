import React from 'react'
import style from './index.module.scss'

interface IButtonProps {
  className?: string
  children?: any
  onClick: Function
  disabled?: boolean
}

const AppButton = (props: IButtonProps) => {

  const { onClick, className } = props

  return (
    <button
      {...props}
      onClick={() => onClick()}
      className={`${style.button ?? ''} ${className ?? ''}`}
    >
      {props.children}
    </button>
  )
}

export default AppButton