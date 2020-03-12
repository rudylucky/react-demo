import React from 'react'
import style from './index.module.scss'

interface IButtonProps {
  className?: string
  children?: any
}

const AppButton = (props: IButtonProps) => {
  return (
    <button className={style.button}>{props.children}</button>
  )
}

export default AppButton