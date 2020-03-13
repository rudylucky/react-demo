import React, { ChangeEvent } from 'react'
import { IInputProps } from '..'
import style from './index.module.scss'

type ITextAreaProps = IInputProps & {
  placeholder?: string
}

const TextArea = (props: ITextAreaProps) => {

  const { onChange } = props

  const handleChange = (v: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(v.target.value)
  }

  return < textarea {...props} onChange={handleChange} className={style.textArea} />
}

export default TextArea