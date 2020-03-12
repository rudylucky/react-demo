import React from 'react'
import style from './index.module.scss'

interface IInputProps {
  className?: string
  type?: string
  onChange?: Function
}

const Input = (props: IInputProps) => {
  const { className, onChange } = props

  return <input onChange={v => onChange!(v) } className={`${className ?? ''} ${style.input ?? ''}`}></input>
}

export default Input