import React from 'react'

import style from './index.module.scss'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { routeName } from 'common/route'

export interface BreadCrumbProps {
}

const BreadCrumb = () => {
  const title = useSelector((state:any) => state.article).title
  const pathname = useLocation().pathname
  const pathArr = pathname.split('/')
  let path = ''
  if (pathname.startsWith('/article/detail')) {
    path = title
  } else {
    path = ' / ' + pathArr.map(v => routeName(v)).filter(v => v).map(v => v?.name).join(' / ')
  }
  return (
    <div className={style.breadCrumb}>
      {path}
    </div>
  )
}

export default BreadCrumb