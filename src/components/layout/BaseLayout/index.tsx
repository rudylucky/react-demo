import React, { useState } from 'react'
import AppHeader from '../AppHeader'
import AppMenu from '../AppMenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import route, { AppRoute } from 'common/route'
import style from './index.module.scss'
import { ArticleEntity } from 'services/ArticleService'
import HomePage from 'pages/HomePage'


function composeRouter(parents: Array<AppRoute>, routers: Array<AppRoute>): Array<AppRoute> {

  if (!parents || !parents.length) {
    return routers
  }

  parents.forEach(route => route.children?.forEach(v => v.path = route.path + v.path))
  const nextParents = parents.filter(v => v.children).flatMap(route => route.children)

  routers = routers.concat(parents)
  return composeRouter(nextParents as Array<AppRoute>, routers)
}

const BaseLayout = () => {

  const routers = composeRouter(route, [])

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
          {routers.map(v => (
            <Route exact path={v.path} key={v.code} component={v.component}></Route>
          ))}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default BaseLayout
