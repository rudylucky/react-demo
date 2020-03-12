import React from 'react'
import style from './index.module.scss'

interface IInputProps {
  className?: string
  type?: string
  onChange?: Function
}

const Input = (props: IInputProps) => {
  const { className, onChange, type } = props

  return <input
    onChange={v => onChange!(v)}
    className={`${className ?? ''} ${style.input ?? ''}`}
    type={type}
  ></input>
}

export default Input