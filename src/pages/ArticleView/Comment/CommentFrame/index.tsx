import React, { useState, ChangeEvent, useEffect } from 'react'
import style from './index.module.scss'
import CommentService from 'services/CommentService'
import _ from 'lodash'
import AppButton from 'components/base/AppButton'
import TextArea from 'components/base/AppInput/TextArea'

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
    console.log('aaaa')
    return
    await commentService.save({
      articleCode, userCode, content
    })
    submitCallback!()
    setContent('')
  }

  return (
    <>
      <div className={style.commentFrame}>
        <TextArea value={content} onChange={v => setContent(v.target.value)} className={style.textarea} />
        <AppButton disabled={submitDisabled} onClick={handleSubmit} className={style.button}>评论</AppButton>
      </div>
    </>
  )
}

export default CommentFrame