import React, { useState, useEffect } from 'react'
import marked from 'marked'
import ArticleService from 'services/ArticleService'
import markdownStyle from './markdown.module.scss'
import style from './index.module.scss'

// import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'

import prismjs from 'prismjs'
import 'prismjs/themes/prism.css'
require('prismjs/components/prism-java')
// const loadLanguages = require('prismjs/components/index')
// loadLanguages([java])


marked.setOptions({
  highlight: function(code, lang) {
    if (['mermaid', ''].includes(lang)) {
      return code
    }
    console.log(lang)
    console.log(prismjs.highlight(code, prismjs.languages[lang], lang))
    return prismjs.highlight(code, prismjs.languages[lang], lang)
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

interface ArticleViewProps {
  children?: any
}

const AritcleView = (props: ArticleViewProps) => {

  const [content, setContent] = useState('')

  useEffect(() => {
    (async () => {
      const content = await ArticleService.getInstance().getContent('4345')
      setContent(marked(content))
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