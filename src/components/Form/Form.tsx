import React from 'react'
import './style.scss'
import FormField from './FormField'
import FormItem from './FormItem'
import FormStore from './FormStore'
import FormStoreContext from './FormStoreContext'
import FormOptionsContext, { FormOptions } from './FormOptionsContext'

export interface FormProps extends FormOptions {
  store: FormStore
  className?: string
  children?: React.ReactNode
  onSubmit?: (e: React.FormEvent) => void
}

function Form (props: FormProps) {
  const { className = '', children, store, onSubmit, ...options } = props

  const classNames = 'rh-form ' + className

  return (
    <FormStoreContext.Provider value={store}>
      <FormOptionsContext.Provider value={options}>
        <form className={classNames} onSubmit={onSubmit} target="nm_iframe" action="">
          {children}
        </form>
        <iframe id="id_iframe" name="nm_iframe" style={{ display:'none' }}></iframe>

      </FormOptionsContext.Provider>
    </FormStoreContext.Provider>
  )
}

Form.Field = FormField

Form.Item = FormItem

export default Form
