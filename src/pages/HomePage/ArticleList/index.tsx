import React, { useEffect, useState } from 'react'
import ArticleService, { IArticleEntity } from 'services/ArticleService'
import { ArticleItem } from '../ArticleItem'

interface ArticleListProps {
  category?: string
}

const ArticleList = (props: ArticleListProps) => {

  const { category } = props

  const [articles, setArticles] = useState<Array<IArticleEntity>>([])

  useEffect(() => {
    (async () => {
      let newArticles = await ArticleService.getInstance().list({ category } as IArticleEntity)
      setArticles(newArticles)
    })()
  }, [category])

  return (
    <>
      {
        articles.map(v => <ArticleItem
          code={v.code}
          key={v.code}
          comments={10}
          reads={v.totalRead}
          title={v.title}
          upVote={v.upVote}
          abstract='小刺猬每天出门前，妈妈都要关照它穿好刺毛衣，
              因为外面可怕的事实在是太多了，
              有了刺毛衣的保护，
              小刺猬可以平平安安地度过一天。
              晚上，浑身是刺的小刺猬回到家，
              妈妈赶紧帮它脱下扎人的刺毛衣，
              然后大家一起光溜溜地洗手吃饭，
              别提有多美了。'
          date={v.updateTime}
        />)
      }
    </>
  )
}

export default ArticleList