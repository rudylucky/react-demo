import React, { useState } from 'react'
import AppButton from 'components/base/AppButton'

const style = require('./MenuItem.module.scss')

interface MenuItemProps {
  menuName: string,
  subMenu?: Array<string>
}

const MenuItem = (props: MenuItemProps) => {

  const { menuName, subMenu } = props
  const [ showSubMenu, setShowSubMenu ] = useState(false)

  const handleMouseOver = () => setShowSubMenu(true)
  const handleMouseLeave = () => setShowSubMenu(false)

  return (
    <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className={style.menuItem}>
      <div>{menuName}</div>
      {subMenu && subMenu.map(v => (<div hidden={!showSubMenu} className={style.subMenu}>{v}</div>))}
    </div>
  )
}

export default MenuItem
