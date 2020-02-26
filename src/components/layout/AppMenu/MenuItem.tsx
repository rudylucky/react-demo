import React from 'react'
import { IRoute } from 'common/route'
import { Link } from 'react-router-dom'

const style = require('./MenuItem.module.scss')

const MenuItem = (props: IRoute) => {
  const { code, name, path, children } = props

  return (
    <div className={style.menuItem}>
      <Link className={style.link} to={path} key={code}>{name}</Link>
      <div className={style.subMenuContainer}>
        {children && children.map(v =>
          <Link className={style.link} to={v.path} key={v.code} >
            <div key={v.code} className={style.subMenu}>
              {v.name}
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default MenuItem
