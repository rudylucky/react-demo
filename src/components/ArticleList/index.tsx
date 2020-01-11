import React, { useEffect, useState } from 'react'
import ArticleService, { ArticleEntity } from 'services/ArticleService'
import ArticleItem from 'components/ArticleItem'
import style from './index.module.scss'
import { useParams, useHistory } from 'react-router-dom'


const ArticleList = (props: any) => {

  const [articles, setArticles] = useState<Array<ArticleEntity>>([])

  useEffect(() => {
    (async () => {
      const articles = await ArticleService.getInstance().list()
      setArticles(articles)
    })()
  }, [])

  return (
    <div className={style.articleList}>
      {articles.map(v => <ArticleItem key={v.code} {...v} />)}
    </div>
  )
}

export default ArticleList