import React from 'react'

import style from './index.module.scss'
import { IRoute, routeName } from 'common/route'
import { useLocation } from 'react-router-dom'

export interface BreadCrumbProps {
}


const BreadCrumb = (props: BreadCrumbProps) => {

  const location = useLocation()
  const arr = location.pathname.split('/').map(v => routeName(v)).filter(v => v)


  const result = arr.map(v => (
    <span key={v?.code}> / {v?.name || 'null'}</span>
  ))
  return (
    <div className={style.breadCrumb}>
      {result}
    </div>
  )
}

export default BreadCrumb