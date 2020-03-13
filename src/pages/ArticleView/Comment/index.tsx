import React, { useEffect, useState, Children } from 'react'
import CommentService, { ICommentEntity } from 'services/CommentService'
import CommentFrame from './CommentFrame'
import CommentItem from './CommentItem'
import style from './index.module.scss'

interface ICommentProps {
  articleCode?: string
}

const Comment = (props: ICommentProps) => {

  const { articleCode } = props

  if (!articleCode) {
    return null
  }

  const commentService = CommentService.getInstance()

  const [comments, setComments] = useState<Array<ICommentEntity>>([])

  const freshComment = async () => {
    const c = await commentService.list({ articleCode })
    setComments(c)
  }

  useEffect(() => {
    (async () => {
      const c = await commentService.list({ articleCode, userCode: 'visitor' })
      setComments(c)
    })()
  }, [articleCode])

  return (
    <div className={style.comment}>
      <CommentFrame submitCallback={freshComment} articleCode={articleCode} userCode={'visitor'} className={style.commentFrame} />
      {
        comments.map(v => <CommentItem
          className={style.commentItem}
          key={v.code}
          code={v.code}
          username={v.username}
          userCode={v.userCode}
          content={v.content}
          articleCode={v.articleCode}
        >{v.children}</CommentItem>)
      }
    </div>
  )
}

export default Comment