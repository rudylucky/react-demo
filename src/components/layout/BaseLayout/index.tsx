import React, { useState } from 'react'
import AppHeader from '../AppHeader'
import AppMenu from '../AppMenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import route from 'common/route'
import style from './index.module.scss'
import { ArticleEntity } from 'services/ArticleService'
import HomePage from 'pages/HomePage'


const BaseLayout = () => {

  const routers = route.map(v => <Route exact path={v.path} key={v.code} component={v.component}></Route>)

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
          {routers}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default BaseLayout
