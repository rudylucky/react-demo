import React, { useState } from 'react'
import AppHeader from '../AppHeader'
import AppMenu from '../AppMenu'
import { BrowserRouter, Route, useParams, useHistory, useLocation } from 'react-router-dom'
import route, { AppRoute, routeName } from 'common/route'
import style from './index.module.scss'
import { ArticleEntity } from 'services/ArticleService'
import HomePage from 'pages/HomePage'
import BreadCrumb from 'components/BreadCrumb'


function composeRouter(parents: Array<AppRoute>, routers: Array<AppRoute>): Array<AppRoute> {
  if (!parents || !parents.length) {
    return routers
  }

  parents.forEach(route => route.children?.forEach(v => v.path = route.path + v.path))
  const nextParents = parents.filter(v => v.children).flatMap(route => route.children)

  routers = routers.concat(parents)
  return composeRouter(nextParents as Array<AppRoute>, routers)
}
const routers = composeRouter(route, [])

const BaseLayout = (props: any) => {

  console.log(route)
  console.log(routers)

  return (
    <div className={style.baseLayout}>
      <div className={style.header}>
        <AppHeader />
      </div>
      <div className={style.menuBar}>
        <AppMenu routes={route} />
      </div>
      <div className={style.breadCrumb}>
        <BreadCrumb />
      </div>
      <div className={style.content}>
        {routers.map(v => (
          v.component && <Route exact={!v.notExact} path={v.path} key={v.code} component={v.component}></Route>
        ))}
      </div>
    </div>
  )
}

export default BaseLayout
