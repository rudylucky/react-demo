import React, { useState } from 'react'
import style from './index.module.scss'
import CommentService from 'services/CommentService'

interface ICommentFrameProps {
  articleCode: string
  userCode: string
  submitCallback?: Function
}

const CommentFrame = (props: ICommentFrameProps) => {

  const { articleCode, userCode, submitCallback } = props

  const [content, setContent] = useState('')

  const commentService = CommentService.getInstance()

  const handleSubmit = async () => {
    setContent('')
    await commentService.save({
      articleCode, userCode, content
    })
    submitCallback!()
  }

  return (
    <>
      <div className={style.commentFrame}>
        <textarea value={content} onChange={v => setContent(v.target.value)} className={style.textarea} />
        <button onClick={handleSubmit} className={style.button}>评论</button>
      </div>
    </>
  )
}

export default CommentFrame