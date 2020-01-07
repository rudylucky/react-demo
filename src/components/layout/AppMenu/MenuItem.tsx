import React, { useState } from 'react'
import AppButton from 'components/base/AppButton'

const style = require('./MenuItem.module.scss')

const MenuItem: React.FC<{
  name: string,
  subMenu?: Array<string>
}> = (props) => {

  const { name: menuName, subMenu } = props
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleMouseOver = () => setShowSubMenu(true)

  const handleMouseLeave = () => setShowSubMenu(false)

  return (
    <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className={style.menuItem}>
      <div>{menuName}</div>
      {subMenu && subMenu.map(v => (<div hidden={!showSubMenu} className={style.subMenu}>{v}</div>))}
    </div>
  );
}

export default MenuItem;
