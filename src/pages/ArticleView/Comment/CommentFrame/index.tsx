import AppButton from 'components/base/AppButton'
import TextArea from 'components/base/AppInput/TextArea'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import CommentService from 'services/CommentService'
import style from './index.module.scss'

interface ICommentFrameProps {
  articleCode: string
  userCode: string
  submitCallback?: Function
}

const CommentFrame = (props: ICommentFrameProps) => {

  const { articleCode, userCode, submitCallback } = props

  const [content, setContent] = useState('')

  const [submitDisabled, setSubmitDisabled] = useState(true)

  const commentService = CommentService.getInstance()

  useEffect(() => {
    if (_.isEmpty(content.trim())) {
      if (!submitDisabled) {
        setSubmitDisabled(true)
      }
      return
    }
    if (submitDisabled) {
      setSubmitDisabled(false)
    }
  }, [content])

  const handleSubmit = async () => {
    await commentService.save({
      articleCode, userCode, content
    })
    submitCallback!()
    setContent('')
  }

  return (
    <>
      <div className={style.commentFrame}>
        <TextArea placeholder='说点什么吧' value={content} onChange={v => setContent(v.target.value)} className={style.textarea} />
        <AppButton disabled={submitDisabled} onClick={handleSubmit} className={style.button}>评论</AppButton>
      </div>
    </>
  )
}

export default CommentFrame