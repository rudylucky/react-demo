import React, { Validator, useCallback, useEffect } from 'react'

import FormStoreContext from './FormStoreContext'
import useFieldChange from './useFieldChange'
import FormOptionsContext, { FormOptions } from './FormOptionsContext'
import { getPropName, getChangeEventValue } from './utils'
import style from './FormField.module.scss'
import _ from 'lodash'
import { FormValidator } from './FormStore'

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

export default function FormField({
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

  const options = React.useContext(FormOptionsContext)
  const { inline, compact, required, labelWidth, gutter } = { ...options, ...restProps }

  const store = React.useContext(FormStoreContext)
  if (!store) {
    throw new Error('FormField should place inside a Form')
  }

  useEffect(() => {
    if (defaultValue) {
      store.set(name, defaultValue)
    }
  }, [])

  const requiredRule: FormValidator = (value) => {
    if (typeof value === 'undefined') {
      return '请输入XXX'
    }
    return true
  }

  if (required) {
    store.addRules(name, [requiredRule])
  }

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

  return (
    <div className={`${style.formField} ${className ?? ''}`}>
      <span className={`${style.label} ${required && style.required}`}>{label}</span>
      <span className={style.container}>
        <div className={style.input}>{child}</div>
        {error && <div className={style.message}>{error}</div>}
      </span>
    </div>
  )
}
