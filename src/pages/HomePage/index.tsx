import _ from 'lodash'
import React from 'react'
import { useParams } from 'react-router-dom'
import ArticleList from './ArticleList'
import style from './index.module.scss'
import MenuItem from './Menuitem/MenuItem'
import { route } from './route'

interface IHomePageProps {
}

const HomePage = (props: IHomePageProps) => {

  let { category } = useParams()
  category = category ? `tech:${category}` : undefined

  return (
    <div className={style.baseLayout}>
      <div className={style.content}>
        <div className={style.imgContainer}>
          {/* <img src='https://s2.ax1x.com/2020/03/09/8poUVs.png' className={style.img}></img> */}
        </div>
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
