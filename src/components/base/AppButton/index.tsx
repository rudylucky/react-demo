import React from 'react'
import style from './index.module.scss'

interface IButtonProps {
  className?: string
  children?: any
  onClick: Function
}

const AppButton = (props: IButtonProps) => {

  const { onClick } = props

  return (
    <button onClick={() => onClick()} className={style.button}>
      {props.children}
    </button>
  )
}

export default AppButton