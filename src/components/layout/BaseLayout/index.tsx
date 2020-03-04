import React from 'react'
import AppHeader from '../AppHeader'
import style from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faThumbsUp, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import AppFooter from '../AppFooter'


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

  return (
    <div className={style.baseLayout}>
      <AppHeader />
      <div className={style.content}>
        <div className={style.img}></div>
        <div className={style.contentContainer}>
          <div className={style.menuContainer}>
            <label><input name='menu-tech' type='radio' defaultChecked/><span>最近更新</span></label>
            <label><input name='menu-tech' type='radio'/><span>Java</span></label>
            <label><input name='menu-tech' type='radio'/><span>JS</span></label>
            <label><input name='menu-tech' type='radio'/><span>Python</span></label>
            <label><input name='menu-tech' type='radio'/><span>Linux</span></label>
            <label><input name='menu-tech' type='radio'/><span>DevOps</span></label>
            <label><input name='menu-tech' type='radio'/><span>Golang</span></label>
          </div>
          <div className={style.articleContainer}>
            {articleList}
          </div>
        </div>
      </div>
      <AppFooter />
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
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{thumbs}</span>
          </span>
          <span>
            <FontAwesomeIcon icon={faCommentDots} />
            <span>{comments}</span>
          </span>
          <span>
            <FontAwesomeIcon icon={faEye} />
            <span>{reads}</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default BaseLayout
