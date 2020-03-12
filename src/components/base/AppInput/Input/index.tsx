import React from 'react'
import style from './index.module.scss'

interface IInputProps {
  className?: string
  type?: string
}

const Input = (props: IInputProps) => {
  const { className } = props

  return <input className={`${className ?? ''} ${style.input ?? ''}`}></input>
}

export default Input