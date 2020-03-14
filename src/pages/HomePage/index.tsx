import _ from 'lodash'
import React from 'react'
import { useParams } from 'react-router-dom'
import ArticleList from './ArticleList'
import style from './index.module.scss'
import MenuItem from './Menuitem/MenuItem'
import { route } from './route'

interface IHomePageProps {
}

const HomePage = () => {

  let { category } = useParams()
  category = category ? `tech:${category}` : undefined

  return (
    <div className={style.baseLayout}>
      <div className={style.content}>
        <div className={style.imgContainer}></div>
        <div className={style.contentContainer}>
          <div className={style.menuContainer}>
            {route.map(v => <MenuItem className={style.menuItem} type={_.uniqueId()} key={v.code} {...v} />)}
          </div>
          <div className={style.articleContainer}>
            <ArticleList category={category} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
