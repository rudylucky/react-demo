import _ from 'lodash'
import React from 'react'
import AppFooter from '../AppFooter'
import AppHeader from '../AppHeader'
import style from './index.module.scss'
import MenuItem from './MenuItem'
import { route } from './route'
import { Route } from 'react-router-dom'

const BaseLayout = () => {

  return (
    <div className={style.baseLayout}>
      <AppHeader />
      <div className={style.content}>
        <div className={style.img}></div>
        <div className={style.contentContainer}>
          <div className={style.menuContainer}>
            {route.map(v => <MenuItem className={style.menuItem} type={_.uniqueId()} key={v.code} {...v} />)}
          </div>
          <div className={style.articleContainer}>
            {route.map(v => <Route exact path={v.path} key={v.code} component={v.component} />)}
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  )
}

export default BaseLayout
