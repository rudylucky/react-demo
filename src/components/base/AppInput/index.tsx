import React from 'react'

export interface AppInputProps {
  value?: string
  onChange: (e: any) => any
  placeholder?: string
  type?: 'date' | 'datetime' | 'textarea'
}

const AppInput = (props: AppInputProps) => {
  const { onChange } = props

  const handleChange = (e: any) => {
    onChange && onChange(e.target.value)
  }

  const inputProps = {
    ...props,
    onChange: handleChange
  }

  switch (props.type) {
    case 'textarea':
      return <textarea {...inputProps} />
    default:
      return <input {...props} onChange={handleChange}/>
  }

  return (
    <>
      <input placeholder={props.placeholder} value={props.value} onChange={(e) => onChange && onChange(e)} />
    </>
  )
}

export default AppInput