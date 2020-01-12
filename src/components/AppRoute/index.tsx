import React from 'react'
import { IRoute } from 'common/route'
import { Route } from 'react-router-dom'

export interface AppRouteProps {
  routers: Array<IRoute>
}

const AppRoute = (props: AppRouteProps) => {

  const { routers } = props

  return (
    <>
      {routers.map(v => (
        v.component && <Route exact={!v.notExact} path={v.path} key={v.code} component={v.component}></Route>
      ))}
    </>
  )
}

export default AppRoute