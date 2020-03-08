import React, { useEffect, useState } from 'react'
import CommentFrame from './CommentFrame'
import CommentItem from './CommentItem'
import style from './index.module.scss'
import CommentService, { ICommentEntity } from 'services/CommentService'
import user from 'reducers/users'
import UserService from 'services/UserService'

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
      <CommentFrame submitCallback={freshComment} articleCode={articleCode} userCode={'visitor'} />
      {
        comments.map((v, i) => <CommentItem key={i} username={v.username} content={v.content} />)
      }
    </div>
  )
}

export default Comment