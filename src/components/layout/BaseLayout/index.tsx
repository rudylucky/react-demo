import React from 'react'
import AppHeader from '../AppHeader'
import AppMenu from '../AppMenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import route from 'common/route'
import style from './index.module.scss'


const BaseLayout = () => {

  return (
    <div className={style.baseLayout}>
      <div className={style.header}>
        <AppHeader />
      </div>
      <BrowserRouter>
        <div className={style.menuBar}>
          <AppMenu routes={route} />
        </div>
        <div className={style.content}>
          <Switch>
            {route.map(v => <Route exact path={v.path} key={v.code}>{v.component}</Route>)}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default BaseLayout
