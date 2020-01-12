import React, { useState, useEffect } from 'react'
import marked from 'marked'
import ArticleService from 'services/ArticleService'
import markdownStyle from './markdown.module.scss'
import style from './index.module.scss'

import prismjs from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-java'
import { useParams } from 'react-router-dom'


interface IToc {
  anchor: string,
  level: number,
  text: string,
  chapter: Array<number>,
  children: Array<IToc>
}

interface IArticleViewProps {
  children?: any
}

const AritcleView = (props: IArticleViewProps) => {

  const [content, setContent] = useState('')
  const [toc, setToc] = useState<IToc>({} as IToc)
  const { articleId } = useParams()

  console.log(articleId)

  let tempToc: IToc
  const renderer = new marked.Renderer()
  renderer.heading = (text, level, raw, slugger) => {
    var anchor = renderer.options.headerPrefix + raw.toLowerCase().replace(/[^\w\\u4e00-\\u9fa5]]+/g, '-')
    const t: IToc = {
      anchor: anchor,
      level: level,
      text: text,
      chapter: [],
      children: []
    }
    let curr = tempToc

    for (let i = 0; i < level - 2; i++) {
      curr = curr.children[curr.children.length - 1]
    }
    if (curr) {
      curr.children.push(t)
    } else {
      // root node
      tempToc = t
    }
    const header = `<a href="#toc-${anchor}"><h${level} id="${anchor}">${text}</h${level}></a>`
    return header
  }

  function buildTOC(parent: IToc) {
    parent.children.forEach((item, index) => {
      item.chapter.splice(0, 0, ...parent.chapter)
      item.chapter.push(index + 1)
      buildTOC(item)
    })
  }

  function toDom(parent: IToc) {
    if (!parent.children) {
    // when toc have not composed already
      return null
    }
    if (!parent.children.length) {
      // the leaf node
      return (
        <li id={'toc-' + parent.anchor} key={parent.chapter.join('.')}>
          <a className={style.tocItem} href={'#' + parent.anchor}>
            {parent.chapter.join('.') + ' ' + parent.text}
          </a>
        </li>
      )
    }
    // the branch node
    return (
      <li id={'toc-' + parent.anchor} key={parent.chapter.join('.')}>
        <a className={style.tocItem} href={'#' + parent.anchor}>
          {parent.chapter?.join('.') + ' ' + parent.text}
        </a>
        <ul>
          {parent.children.map(v => toDom(v))}
        </ul>
      </li>
    )
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
      if (!articleId) {
        return
      }
      const content = await ArticleService.getInstance().getContent(articleId)
      if (!content) {
        return
      }
      setContent(marked(content))
      buildTOC(tempToc)
      setToc(tempToc)
    })()
  }, [])

  return (
    <div className={style.articleView}>
      <div className={style.toc}>
        目录
        {toDom(toc)}
      </div>
      <div className={style.mockToc}></div>
      <div
        className={`${style.markdownBody} ${markdownStyle['markdown-body']}`}
        dangerouslySetInnerHTML={{ __html: content }}>
      </div>
    </div>
  )
}

export default AritcleView