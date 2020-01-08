import React from 'react'
import ArticleService from 'services/ArticleService'

const ArticleItem = () => {

  const articleService = ArticleService.getInstance()
  const content = articleService.infoWithContent({ id: 1 })

  return (
    <div>
      {{ content }}
    </div>
  )
}

export default ArticleItem