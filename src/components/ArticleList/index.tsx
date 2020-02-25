import React, { useEffect, useState } from 'react'
import ArticleService, { IArticleEntity } from 'services/ArticleService'
import ArticleItem from 'components/ArticleItem'
import style from './index.module.scss'


const ArticleList = () => {

  const [articles, setArticles] = useState<Array<IArticleEntity>>([])

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