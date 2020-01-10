import React, { useState, useEffect } from 'react'
import ArticleService from 'services/ArticleService'

import style from './index.module.scss'
import markdownStyle from './markdown.module.scss'

interface ArticleViewProps {
  children?: any
}

const AritcleView = (props: ArticleViewProps) => {

  const [content, setContent] = useState('')

  useEffect(() => {
    (async () => {
      const content = await ArticleService.getInstance().getContent('32423445')
      console.log(content)
      setContent(content)
    })()
  }, [])

  return (
    <div className={style.articleView}>
      <div className={markdownStyle['markdown-body']} dangerouslySetInnerHTML={{ __html: content }}>

      </div>
    </div>
  )
}

export default AritcleView