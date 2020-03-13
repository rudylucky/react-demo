import React, { useState, useEffect } from 'react'
import style from './index.module.scss'
import TextArea from 'components/base/AppInput/TextArea'
import AppButton from 'components/base/AppButton'
import CommentService, { ICommentEntity } from 'services/CommentService'
import CommentItem from 'pages/ArticleView/Comment/CommentItem'

const MessageBoard = () => {

  const [text, setText] = useState('')

  const commentService = CommentService.getInstance()

  const [comments, setComments] = useState<Array<ICommentEntity>>([])

  const articleCode = '_message_board'
  const userCode = 'visitor'

  useEffect(() => {
    commentService.list({ articleCode })
      .then(setComments)
  }, [])

  const handleSubmit = async () => {
    console.log('aaaa')
    await commentService.save({
      articleCode, userCode, content: text
    })
    setText('')
  }

  return <div className={style.messageboard}>
    <div className={style.location}>
      您现在的位置是：首页 &gt; 博客留言
    </div>
    <div className={style.inputContainer}>
      <TextArea value={text} onChange={setText} />
      <AppButton className={style.button} onClick={() => handleSubmit()} >吐槽</AppButton>
    </div>
    <div>
      {
        comments.map((v, i) => <CommentItem key={i} userCode={v.userCode} content={v.content} />)
      }
    </div>
  </div>
}

export default MessageBoard