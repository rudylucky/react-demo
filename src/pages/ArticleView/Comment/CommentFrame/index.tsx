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
  hidden?: boolean
  parentCode?: string
  className?: string
  buttonName?: string
  placeholder?: string
}

const CommentFrame = ({
  articleCode, buttonName, userCode, submitCallback, placeholder, hidden, parentCode, className = ''
}: ICommentFrameProps) => {
  const commentService = CommentService.getInstance()

  const [content, setContent] = useState('')
  const [submitDisabled, setSubmitDisabled] = useState(true)

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
      articleCode, userCode, content, parentCode
    })
    submitCallback && submitCallback()
    setContent('')
  }

  return (
    <>
      <div className={`${style.commentFrame} ${className}`} hidden={hidden}>
        <TextArea placeholder={placeholder} value={content} onChange={v => setContent(v)} className={style.textarea} />
        <AppButton disabled={submitDisabled} onClick={handleSubmit} className={style.button}>{buttonName}</AppButton>
      </div>
    </>
  )
}

export default CommentFrame