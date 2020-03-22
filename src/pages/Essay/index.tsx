import React, { useState, useEffect } from 'react'
import style from './index.module.scss'
import Timeline from './Timeline'
import Loading from 'components/Loading'
import ArticleService, { IArticleEntity } from 'services/ArticleService'

const Essay = () => {

  const articleService = ArticleService.getInstance()

  const [articleList, setArticleList] = useState <Array<IArticleEntity>>([])

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    (async () => {
      const list = await articleService.list()
      setArticleList(list)
      setLoaded(true)
    })()
  }, [])

  return <div className={style.essay}>
    <div>
      <Loading loaded={loaded}>
        <Timeline data={articleList} />
      </Loading>
    </div>
  </div>
}

export default Essay