import React from 'react'
import { IInputProps } from '..'

type IButtonProps = IInputProps & {
}


const TextArea = (props: IInputProps) => {
  return <textarea {...props} />
}

export default TextArea