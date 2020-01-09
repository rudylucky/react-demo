import React from 'react'
import MenuItem from './MenuItem'
import { AppRoute } from 'common/route'
import { Link, } from 'react-router-dom'
const style = require('./index.module.scss')

export interface AppMenuProps {
  routes: Array<AppRoute>
}

const AppMenu = (props: AppMenuProps) => {
  const { routes } = props
  const mappings = routes.map(v => <MenuItem key={v.code} {...v} />)

  return (
    <div className={style.appMenu}>
      {mappings}
    </div>
  )
}

export default AppMenu
