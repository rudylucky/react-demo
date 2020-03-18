import React, { ReactElement } from 'react'
import style from './index.module.scss'

interface IDropdown {
  children: ReactElement
  className?: string
}

const Dropdown = ({ children, className }: IDropdown) => {

  return <>
    <div className={`${style.dropdown} ${className}`}>
      {children}
      <div className={style.option}>设置</div>
      <div className={style.option}>个人信息</div>
      <div className={style.option}>退出登录</div>
    </div>
  </>
}

export default Dropdown