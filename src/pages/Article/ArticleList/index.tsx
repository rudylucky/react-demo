import React from 'react'
import ArticleService from 'services/ArticleService'

const ArticleList = () => {

  const articleService = ArticleService.getInstance()
  const articleList = articleService.list({
    id: 1
  })

  const article = '<h1>sdfdf</h1>'

  return (
    <div dangerouslySetInnerHTML={{ __html: article }}>
    </div>
  )
}

export default ArticleList