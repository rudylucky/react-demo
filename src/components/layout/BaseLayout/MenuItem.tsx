import React from 'react'
import { IRoute } from 'common/route'
import { Link, useLocation } from 'react-router-dom'
import _ from 'lodash'

const style = require('./MenuItem.module.scss')

type MenuItemProps = IRoute & {
  type: string
  className: string
}

const MenuItem = (props: MenuItemProps) => {
  const { code, className, name, path, type } = props

  const location = useLocation()

  const uid = _.uniqueId()

  return (
    <label htmlFor={uid} className={style.menuItem}>
      <Link to={path}>
        <input type='radio' name={type} id={uid} checked={location.pathname.endsWith(path)}/>
        <span className={className}>{name}</span>
      </Link>
    </label>
  )
}

export default MenuItem
