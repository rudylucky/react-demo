import React from 'react'
import AppHeader from '../AppHeader'
import AppMenu from '../AppMenu'
import { IRoute, route, menuRoute, routeName } from 'common/route'
import style from './index.module.scss'
import BreadCrumb from 'components/BreadCrumb'
import AppRoute from 'components/AppRoute'
import util from '../../../common/util'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function composeRouter(parents: Array<IRoute>, routers: Array<IRoute>): Array<IRoute> {
  if (!parents || !parents.length) {
    return routers
  }

  parents.forEach(route => route.children?.forEach(v => v.path = route.path + v.path))
  const nextParents = util.flatMap(parents.filter(v => v.children), route => route.children)

  routers = routers.concat(parents)
  return composeRouter(nextParents as Array<IRoute>, routers)
}
const routers = composeRouter(route, [])

const BaseLayout = () => {

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
