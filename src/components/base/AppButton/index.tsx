import React from 'react'
import style from './index.module.scss'

interface IButtonProps {
  className?: string
  children?: any
  onClick: Function
  disabled?: boolean
}

const AppButton = ({ onClick, disabled, className = '', children }: IButtonProps) => {

  return (
    <button
      disabled={disabled}
      onClick={() => onClick()}
      className={`${style.button} ${className}`}
    >
      {children}
    </button>
  )
}

export default AppButton