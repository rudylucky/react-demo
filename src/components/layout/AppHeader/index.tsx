import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { route } from './route'
import _ from 'lodash'

const style = require('./index.module.scss')

const AppHeader = () => {

  const uid = _.uniqueId()
  const location = useLocation()

  return (
    <div className={`${style.appHeader} black`} id={style.appHeader}>
      {
        route.map(v => <label key={v.code}>
          <Link to={v.path}>
            <input checked={location.pathname.startsWith(v.path)} name={uid} type='radio' />
            <span>{v.name}</span>
          </Link>
        </label>)
      }
    </div>
  )
}


export default AppHeader
