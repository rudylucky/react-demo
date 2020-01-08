import React, { useState } from 'react'
import { MenuEntity } from 'services/MenuService'

const style = require('./MenuItem.module.scss')

const MenuItem = (props: MenuEntity) => {
  const { code, name, path, children } = props
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleMouseOver = () => setShowSubMenu(true)
  const handleMouseLeave = () => setShowSubMenu(false)

  return (
    <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className={style.menuItem}>
      <div>{name}</div>
      {children && children.map(v => <div hidden={!showSubMenu} key={v.code} className={style.subMenu}>{v.name}</div>)}
    </div>
  )
}

export default MenuItem
