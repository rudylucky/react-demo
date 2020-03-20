import React from 'react'

import FormStoreContext from './FormStoreContext'
import useFieldChange from './useFieldChange'
import FormOptionsContext, { FormOptions } from './FormOptionsContext'
import { getPropName, getChangeEventValue } from './utils'
import style from './FormField.module.scss'
import _ from 'lodash'

export interface FormFieldProps extends FormOptions {
  className?: string
  // 显示的名称
  label?: string
  // 在 store 中的键值
  name: string
  valueProp?: string | ((type: any) => string)
  getter?: (...args: any[]) => any
  suffix?: React.ReactNode
  children?: React.ReactNode
  defaultValue?: string | number | boolean
}

export default function FormField ({
  defaultValue,
  className,
  label,
  name,
  valueProp = 'value',
  getter = getChangeEventValue,
  suffix,
  children,
  ...restProps
}: FormFieldProps) {

  const store = React.useContext(FormStoreContext)

  if (!store) {
    throw new Error('FormField should place inside a Form')
  }

  if (defaultValue) {
    store.set(name, defaultValue)
  }
  const options = React.useContext(FormOptionsContext)
  const [value, setValue] = React.useState(store.get(name))
  const [error, setError] = React.useState(store.error(name))

  const onChange = React.useCallback(
    (...args: any[]) => store.set(name, getter(...args)),
    [name, store, getter])

  useFieldChange(store, name, () => {
    setValue(store.get(name))
    setError(store.error(name))
  })

  let child: any = children

  if (React.isValidElement(child)) {
    const prop = getPropName(valueProp, child && child.type)
    const childProps = { [prop]: value, onChange }
    if (defaultValue) {
      childProps.defaultValue = defaultValue
    }
    child = React.cloneElement(child, childProps)
  }

  const { inline, compact, required, labelWidth, gutter } = { ...options, ...restProps }

  console.log(value)

  return (
    <div className={`${style.formField} ${className ?? ''}`}>
      <span className={`${style.label} ${required && _.isEmpty(_.trim(value)) && style.required}`}>{label}</span>
      <span className={style.container}>
        <div className={style.input}>{child}</div>
        <div className={`${style.message} ${error && style.message}`}>{'请输入用户名'}</div>
      </span>
    </div>
  )
}
