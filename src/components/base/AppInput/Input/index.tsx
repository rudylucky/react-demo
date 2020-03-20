import React from 'react'
import style from './index.module.scss'

interface IInputProps {
  className?: string
  type?: string
  onChange?: Function
  placeholder?: string
  defaultValue?: string
}

const Input = (props: IInputProps) => {
  const { className, onChange, type, placeholder, defaultValue } = props

  return <input
    defaultValue={defaultValue}
    placeholder={placeholder}
    onChange={v => onChange!(v)}
    className={`${className ?? ''} ${style.input ?? ''}`}
    type={type}
  ></input>
}

export default Input