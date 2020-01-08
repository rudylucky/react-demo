import React from 'react'
import ArticleService, { ArticleEntity } from 'services/ArticleService'
import ArticleItem from 'components/base/ArticleItem'
import style from './index.module.scss'

const ArticleList = () => {

  const article: ArticleEntity = {
    title: '庆余年影子的真正身份揭秘，他是最为神秘一个人……',
    authorCode: '作者',
    abstract: '影子可以说是《庆余年》里面最为神秘的一个人了，五竹的身份虽然剧情还没有交待，但是很',
    upVote: 10,
    tag: 'tech',
    category: 'tech',
    totalRead: 22,
    createTime: new Date(),
    updateTime: new Date()
  }

  return (
    <div className={style.articleList}>
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
      <ArticleItem {...article} />
    </div>
  )
}

export default ArticleList