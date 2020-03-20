import React, { ReactElement } from 'react'
import style from './index.module.scss'

export interface DropdownOption {
  label: string
  callback: Function
}

export interface IDropdown {
  children: ReactElement
  className?: string
  option: Array<DropdownOption>
}

const Dropdown = ({ children, className, option }: IDropdown) => {

  return <>
    <div className={`${style.dropdown} ${className}`}>
      {children}
      {option.map(v => <div className={style.option} key={v.label} onClick={() => v.callback()}>{v.label}</div>)}
    </div>
  </>
}

export default Dropdown