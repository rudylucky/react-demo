import React, { useState, useEffect } from 'react'
import marked from 'marked'
import ArticleService from 'services/ArticleService'
import markdownStyle from './markdown.module.scss'
import style from './index.module.scss'

import prismjs from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-java'

var toc: Array<any> = []

const renderer = new marked.Renderer()
renderer.heading = (text, level, raw, slugger) => {
  var anchor = renderer.options.headerPrefix + raw.toLowerCase().replace(/[^\w\\u4e00-\\u9fa5]]+/g, '-')
  toc.push({
    anchor: anchor,
    level: level,
    text: text
  })
  const header = `<a href="#table-of-contents"><h ${level} id="${anchor}">${text}</h${level}></a>`
  return header
}

console.log(toc)

marked.setOptions({
  highlight: (code, lang) => {
    if (['mermaid', ''].includes(lang)) {
      return code
    }
    return prismjs.highlight(code, prismjs.languages[lang], lang)
  },
  renderer,
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
      <div id="table-of-contents"></div>
      <div className={markdownStyle['markdown-body']} dangerouslySetInnerHTML={{ __html: content }}>

      </div>
    </div>
  )
}

export default AritcleView