import React, { useState } from 'react'
import { AppRoute } from 'common/route'
import { Link } from 'react-router-dom'

const style = require('./MenuItem.module.scss')

const MenuItem = (props: AppRoute) => {
  const { code, name, path, children } = props
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleMouseOver = () => setShowSubMenu(true)
  const handleMouseLeave = () => setShowSubMenu(false)

  return (
    <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className={style.menuItem}>
      <Link className={style.link} to={path} key={code}>{name}</Link>
      {children && showSubMenu && children.map(v =>
        <Link className={style.link} to={v.path} key={v.code} >
          <div key={v.code} className={style.subMenu}>
            {v.name}
          </div>
        </Link>
      )}
    </div>
  )
}

export default MenuItem
