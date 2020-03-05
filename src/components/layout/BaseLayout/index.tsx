import React from 'react'
import AppHeader from '../AppHeader'
import style from './index.module.scss'
import AppFooter from '../AppFooter'
import { menu } from './route'
import MenuItem from './MenuItem'
import _ from 'lodash'
import { useParams } from 'react-router-dom'
import ArticleList from './ArticleList'


const BaseLayout = () => {


  const { category } = useParams()

  return (
    <div className={style.baseLayout}>
      <AppHeader />
      <div className={style.content}>
        <div className={style.img}></div>
        <div className={style.contentContainer}>
          <div className={style.menuContainer}>
            {menu.map(v => <MenuItem className={style.menuItem} type={_.uniqueId()} key={v.code} {...v} />)}
          </div>
          <div className={style.articleContainer}>
            
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  )
}

export default BaseLayout
