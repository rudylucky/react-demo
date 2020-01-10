import React, { useState, useEffect } from 'react'
import marked from 'marked'
import ArticleService from 'services/ArticleService'
import markdownStyle from './markdown.module.scss'
import style from './index.module.scss'

import prismjs from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-java'


interface TOC {
  anchor: string,
  level: number,
  text: string,
  children: Array<TOC>
}

interface ArticleViewProps {
  children?: any
}

const AritcleView = (props: ArticleViewProps) => {

  const [content, setContent] = useState('')

  const [toc, setToc] = useState<Array<TOC>>([])

  let tempToc: TOC
  const renderer = new marked.Renderer()
  renderer.heading = (text, level, raw, slugger) => {
    var anchor = renderer.options.headerPrefix + raw.toLowerCase().replace(/[^\w\\u4e00-\\u9fa5]]+/g, '-')
    const t = {
      anchor: anchor,
      level: level,
      text: text,
      children: []
    }
    let curr = tempToc
    for (let i = 0; i < level - 2; i++) {
      curr = curr.children[curr.children.length - 1]
    }
    if (curr) {
      curr.children.push(t)
    } else {
      tempToc = t
    }
    const header = `<a href="#toc-${anchor}"><h${level} id="${anchor}">${text}</h${level}></a>`
    return header
  }

  function buildTOC(parents: Array<TOC>) {
  }

  marked.setOptions({
    highlight: (code, lang) => ['mermaid', ''].includes(lang) ? code : prismjs.highlight(code, prismjs.languages[lang], lang),
    renderer,
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })

  useEffect(() => {
    (async () => {
      const content = await ArticleService.getInstance().getContent('4345')
      setContent(marked(content))
      console.log(tempToc)
      // setToc(tempToc)
    })()
  }, [])

  return (
    <div className={style.articleView}>
      <div id="table-of-contents">
        <ul>

        </ul>
      </div>
      <div className={markdownStyle['markdown-body']} dangerouslySetInnerHTML={{ __html: content }}>
      </div>
    </div>
  )
}

export default AritcleView