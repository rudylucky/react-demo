import { faAngleDoubleLeft, faAngleDoubleRight, faArrowCircleDown, faArrowCircleUp, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import util from 'common/util'
import footerStyle from 'components/layout/AppFooter/index.module.scss'
import headerStyle from 'components/layout/AppHeader/index.module.scss'
import marked from 'marked'
import prismjs from 'prismjs'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import ArticleService, { IArticleEntity } from 'services/ArticleService'
import CommentService from 'services/CommentService'
import style from './index.module.scss'
import markdownStyle from './markdown.module.scss'
import Comment from './Comment'


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

const AritcleView = () => {

  const [content, setContent] = useState('')
  const [toc, setToc] = useState<IToc>({} as IToc)
  const { articleCode } = useParams()

  const [tocCollapse, setTocCollapse] = useState(true)
  const tocContentClassName = tocCollapse ? 'invisible' : ''

  let tempToc: IToc
  const renderer = new marked.Renderer()
  renderer.heading = (text, level) => {
    var anchor = 'uuid' + util.uuid()
    const t: IToc = {
      anchor: anchor,
      level: level,
      text: text,
      chapter: [],
      children: []
    }
    let curr = tempToc

    if (!curr) {
      // root node
      if (level > 1) {
        tempToc = curr = { children: [] as Array<IToc>, chapter: [0] } as IToc
        for (let i = 1; i < level; i++) {
          const newItem = { children: [] as Array<IToc> } as IToc
          if (i !== level - 1) {
            curr.children.push(newItem)
          }
        }
      } else {
        setTitle(text)
      }
    }

    for (let i = 0; i < level - 2; i++) {
      if (!curr) {
        curr = { children: [] as Array<IToc> } as IToc
      }
      if (!curr.children.length) {
        curr.children.push({ children: [] as Array<IToc> } as IToc)
      }
      curr = curr.children[curr.children.length - 1]
    }
    if (curr) {
      curr.children.push(t)
    }
    const header = `<a href="#toc-${anchor}"><h${level} id="${anchor}">${text}</h${level}></a>`
    return header
  }

  function buildTOC(parent: IToc) {
    parent?.children.forEach((item, index) => {
      if (!item.chapter) {
        item.chapter = []
      }
      item.chapter.splice(0, 0, ...parent.chapter)
      if (item.chapter[0] === 0) {
        item.chapter.splice(0, 1)
      }
      item.chapter.push(index + 1)
      buildTOC(item)
    })
  }

  function toDom(parent: IToc) {
    if (!parent?.children ) {
    // when toc have not composed already
      return null
    }

    if (!parent.chapter) {
      return (
        <ul>
          {parent.children.map(v => toDom(v))}
        </ul>
      )
    }

    if (!parent.children.length) {
      // the leaf node
      return (
        <li id={'toc-' + parent.anchor} key={parent.chapter.join('.')}>
          <a className={style.tocItem} href={'#' + parent.anchor}>
            {parent.chapter.join('.') + ' ' + (parent.text ?? '')}
          </a>
        </li>
      )
    }

    // the branch node
    return (
      <li id={'toc-' + parent.anchor} key={parent.chapter.join('.')}>
        <a className={style.tocItem} href={'#' + parent.anchor}>
          {parent.chapter?.join('.') + ' ' + (parent.text ?? '')}
        </a>
        <ul>
          {parent.children.map(v => toDom(v))}
        </ul>
      </li>
    )
  }

  const hightlightCode = (code: any, lang: any) => {
    console.log(lang)
    return ['mermaid', ''].includes(lang) ? code : prismjs.highlight(code, prismjs.languages[lang], lang)
  }

  marked.setOptions({
    highlight: hightlightCode,
    renderer,
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })

  const [article, setArticle] = useState<IArticleEntity | null>(null)

  const [title, setTitle] = useState<string>('')

  document.title = title

  useEffect(() => {
    (async () => {
      if (!articleCode) {
        return
      }
      const content = await ArticleService.getInstance().infoWithContent({ code: articleCode } as IArticleEntity)
      if (!content) {
        return
      }

      setContent(marked(content.content!))
      buildTOC(tempToc)
      setToc(tempToc)
      setArticle({
        ...content,
        content: ''
      })
    })()
  }, [])

  const smoothScroll = (anchor: Element) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const href = anchor.getAttribute('href')
      if (!href) {
        return
      }
      const elem = document.querySelector(href)
      if (!elem) {
        return
      }
        elem?.scrollIntoView({
          behavior: 'smooth'
        })
    })
  }

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(smoothScroll)
    const headerDom = document.getElementById(headerStyle.header)
    headerDom && smoothScroll(headerDom)
    const footerDom = document.querySelector(footerStyle.footer)
    footerDom && smoothScroll(footerDom)
  }, [toc])

  const comments = CommentService.getInstance().getComments()
  const dispatch = useDispatch()

  dispatch({ type: 'UPDATE_ARTICLE', title: article?.title ?? '' })

  const history = useHistory()

  return (
    <div className={style.articleView}>
      <div className={style.markdown}>
        <div className={style.titleContainer}>
          <span className={style.title} onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span >{title}</span>
          </span>
          <span className={style.createDate}>{new Date().toLocaleDateString()}</span>
        </div>
        <div
          className={markdownStyle['markdown-body']}
          dangerouslySetInnerHTML={{ __html: content }}>
        </div>
      </div>
      <div className={style.comment}>
        <Comment />
      </div>
      <div className={style.toTop}>
        <a href={'#' + headerStyle.appHeader}>
          <FontAwesomeIcon className={style.icon} icon={faArrowCircleUp} />
        </a>
        <a href={'#' + footerStyle.appFooter}>
          <FontAwesomeIcon className={style.icon} icon={faArrowCircleDown} />
        </a>
      </div>
    </div>
  )
}

export default AritcleView