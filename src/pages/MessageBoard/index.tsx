import CommentFrame from 'pages/ArticleView/Comment/CommentFrame'
import CommentItem from 'pages/ArticleView/Comment/CommentItem'
import React, { useEffect, useState } from 'react'
import CommentService, { ICommentEntity } from 'services/CommentService'
import style from './index.module.scss'

const MessageBoard = () => {

  const commentService = CommentService.getInstance()

  const [comments, setComments] = useState<Array<ICommentEntity>>([])

  const articleCode = '_message_board'
  const userCode = 'visitor'

  const freshComment = () => {
    commentService.list({ articleCode }).then(setComments)
  }

  useEffect( freshComment, [])

  return <div className={style.messageboard}>
    <div className={style.location}>
      您现在的位置是：首页 &gt; 博客留言
    </div>
    <div className={style.inputContainer}>
      <CommentFrame articleCode={articleCode} userCode={userCode} buttonName='吐槽' placeholder='我有句话要说' />
    </div>
    {
      comments.map(v => <CommentItem key={v.code} {...v} commentCallback={freshComment} />)
    }
  </div>
}

export default MessageBoard