import React from 'react'
import MenuItem from './MenuItem'
import route from 'common/route'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const style = require('./index.module.scss')

const AppMenu = () => {

  return (
    <div className={style.appMenu}>
      <Router>
        {route.map(v => (
          <Route path={v.path} key={v.code} component={v.component}>
            <MenuItem key={v.code} {...v} />
          </Route>
        ))}
      </Router>
    </div>
  )
}

export default AppMenu
