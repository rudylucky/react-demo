import React, { useState } from 'react'
import AppHeader from '../AppHeader'
import AppMenu from '../AppMenu'
import { BrowserRouter, Route, useParams, useHistory, useLocation } from 'react-router-dom'
import { IRoute, routeName, route, menuRoute } from 'common/route'
import style from './index.module.scss'
import { IArticleEntity } from 'services/ArticleService'
import HomePage from 'pages/HomePage'
import BreadCrumb from 'components/BreadCrumb'
import AppRoute from 'components/AppRoute'


function composeRouter(parents: Array<IRoute>, routers: Array<IRoute>): Array<IRoute> {
  if (!parents || !parents.length) {
    return routers
  }

  parents.forEach(route => route.children?.forEach(v => v.path = route.path + v.path))
  const nextParents = parents.filter(v => v.children).flatMap(route => route.children)

  routers = routers.concat(parents)
  return composeRouter(nextParents as Array<IRoute>, routers)
}
const routers = composeRouter(route, [])

const BaseLayout = (props: any) => {

  return (
    <div className={style.baseLayout}>
      <div className={style.header}>
        <AppHeader />
      </div>
      <div className={style.menuBar}>
        <AppMenu routes={menuRoute} />
      </div>
      <div className={style.breadCrumb}>
        <BreadCrumb />
      </div>
      <div className={style.content}>
        <AppRoute routers={routers} />
      </div>
    </div>
  )
}

export default BaseLayout
