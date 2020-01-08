import React from 'react'
import MenuItem from './MenuItem'
import MenuService, { MenuEntity } from 'services/MenuService'

const style = require('./index.module.scss')

const AppMenu = () => {

  const menus = MenuService.getInstance().getMenu()

  return (
    <div className={style.appMenu}>
      {menus.map(v => <MenuItem code={v.code} name={v.name} key={v.code} >{v.children}</MenuItem>)}
    </div>
  )
}

export default AppMenu
