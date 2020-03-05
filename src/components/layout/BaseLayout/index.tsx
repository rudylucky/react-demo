import React from 'react'
import AppHeader from '../AppHeader'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faThumbsUp, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import AppFooter from '../AppFooter'
import { menu } from './route'
import MenuItem from './MenuItem'
import _ from 'lodash'
import ArticleList from 'components/ArticleList'
import { useParams } from 'react-router-dom'
import ArticleItem from 'components/ArticleItem'


const BaseLayout = () => {

  const articleList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
    return (<ArticleItem
      key={i}
      thumbs={Math.round(Math.random() * 1000)}
      comments={Math.round(Math.random() * 1000)}
      reads={Math.round(Math.random() * 1000)}
      title='小刺猬脱毛衣'
      abstract='小刺猬每天出门前，妈妈都要关照它穿好刺毛衣，
              因为外面可怕的事实在是太多了，
              有了刺毛衣的保护，
              小刺猬可以平平安安地度过一天。
              晚上，浑身是刺的小刺猬回到家，
              妈妈赶紧帮它脱下扎人的刺毛衣，
              然后大家一起光溜溜地洗手吃饭，
              别提有多美了。'
      date={new Date()}
    />)
  })

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
            <ArticleList category={category} />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  )
}

export default BaseLayout
