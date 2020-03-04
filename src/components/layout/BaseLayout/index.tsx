import React from 'react'
import AppHeader from '../AppHeader'
import { IRoute, route } from 'common/route'
import style from './index.module.scss'
import util from '../../../common/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function composeRouter(parents: Array<IRoute>, routers: Array<IRoute>): Array<IRoute> {
  if (!parents || !parents.length) {
    return routers
  }

  parents.forEach(route => route.children?.forEach(v => v.path = route.path + v.path))
  const nextParents = util.flatMap(parents.filter(v => v.children), route => route.children)

  routers = routers.concat(parents)
  return composeRouter(nextParents as Array<IRoute>, routers)
}

const BaseLayout = () => {

  const articleList = new Array(10).map((v, i) => {
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

  return (
    <div className={style.baseLayout}>
      <div className={style.header} id={style.header}>
        <AppHeader />
      </div>
      <div className={style.img}></div>
      <div className={style.contentContainer}>
        <div className={style.menuContainer}>
          <div>最近更新</div>
          <div>Java</div>
          <div>JS</div>
          <div>Python</div>
          <div>Linux</div>
          <div>DevOps</div>
          <div>Golang</div>
        </div>
        <div className={style.articleContainer}>
          {articleList}
        </div>
      </div>
    </div>
  )
}

interface ArticleItemProps {
  thumbs: number
  comments: number
  reads: number
  title: string
  abstract: string
  date: Date
}

export function ArticleItem(props: ArticleItemProps) {

  const { title, abstract, date, thumbs, comments, reads } = props

  return (
    <div className={style.articleItem}>
      <div className={style.title}>{title}</div>
      <div className={style.content}>{abstract}</div>
      <div className={style.bottom}>
        <span className={style.dateContainer}>发布时间：{date.toLocaleDateString()}</span>
        <span className={style.buttonContainer}>
          <span>
            <FontAwesomeIcon icon={faEye} />
            <span>{thumbs}</span>
          </span>
          <span>
            <FontAwesomeIcon icon={faEye} />
            <span>{comments}</span>
          </span>
          <span>
            <FontAwesomeIcon icon={faEye} />
            <span>{reads}</span>
          </span>
        </span>
      </div>
      <div>
      </div>
    </div>
  )
}

export default BaseLayout
