import AppFooter from 'components/layout/AppFooter'
import _ from 'lodash'
import React from 'react'
import { match, Route } from 'react-router-dom'
import style from './index.module.scss'
import MenuItem from './MenuItem'
import { route } from './route'

interface IHomePageProps {
  match?: match
}

const HomePage = (props: IHomePageProps) => {

  console.log('props.match.path', props)

  return (
    <div className={style.baseLayout}>
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

export default HomePage
