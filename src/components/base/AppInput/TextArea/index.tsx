import React from 'react'
import { IInputProps } from '..'
import style from './index.module.scss'

type ITextAreaProps = IInputProps & {
}

const TextArea = (props: ITextAreaProps) => {
  return < textarea {...props} className={style.textArea} />
}

export default TextArea