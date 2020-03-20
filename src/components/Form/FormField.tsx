import React from 'react'

import FormStoreContext from './FormStoreContext'
import useFieldChange from './useFieldChange'
import FormOptionsContext, { FormOptions } from './FormOptionsContext'
import { getPropName, getValueFromEvent } from './utils'
import style from './FormField.module.scss'

export interface FormFieldProps extends FormOptions {
  className?: string
  // 显示的名称
  label?: string
  // 在 store 中的键值
  name: string
  valueProp?: string | ((type: any) => string)
  valueGetter?: (...args: any[]) => any
  suffix?: React.ReactNode
  children?: React.ReactNode
}

export default function FormField (props: FormFieldProps) {
  const {
    className,
    label,
    name,
    valueProp = 'value',
    valueGetter = getValueFromEvent,
    suffix,
    children,
    ...restProps
  } = props

  const store = React.useContext(FormStoreContext)

  if (!store) {
    throw new Error('FormField should place inside a Form')
  }

  const options = React.useContext(FormOptionsContext)
  const [value, setValue] = React.useState(store.get(name))
  const [error, setError] = React.useState(store.error(name))

  const onChange = React.useCallback(
    (...args: any[]) => store.set(name, valueGetter(...args)),
    [name, store, valueGetter]
  )

  useFieldChange(store, name, () => {
    setValue(store.get(name))
    setError(store.error(name))
  })

  let child: any = children

  if (React.isValidElement(child)) {
    const prop = getPropName(valueProp, child && child.type)
    const childProps = { [prop]: value, onChange }
    child = React.cloneElement(child, childProps)
  }

  const { inline, compact, required, labelWidth, gutter, errorClassName } = {
    ...options,
    ...restProps
  }

  const classNames = [
    classes.field,
    inline ? classes.inline : '',
    compact ? classes.compact : '',
    required ? classes.required : '',
    error ? classes.error : '',
    className ? className : '',
    error ? errorClassName : ''
  ].join(' ')

  const headerStyle = {
    width: labelWidth,
    marginRight: gutter
  }

  return (
    <div className={classNames}>
      {label && <div className={classes.header} style={headerStyle}>
        {label}
      </div>}
      <div className={classes.container}>
        <div className={classes.control}>{child}</div>
        <div className={classes.message}>{error}</div>
      </div>
      {suffix && <div className={classes.footer}>{suffix}</div>}
    </div>
  )
}

const classes = {
  field: style.formField,
  inline: style.container,
  compact: style.compact,
  required: style.required,
  error: style.error,

  header: style.header,
  container: style.container,
  control: style.container,
  message: style.message,
  footer: style.footer
}
