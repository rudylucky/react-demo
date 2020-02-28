import React, { useState } from 'react'
import style from './Comment.module.scss'
import { ICommentEntity } from 'services/CommentService'
import AppModal from 'components/base/AppModal'
import AppInput from 'components/base/AppInput'

const Comment = (props: ICommentEntity) => {

  const { author, content, createTime } = props
  const [commentVisible, setCommentVisible] = useState(false)
  const [reply, setReply] = useState('')

  const handleValueChange = (value: string) => {
    setReply(value)
  }

  const handleSubmit = () => {
    console.log('submit: ', reply)
  }

  return (
    <div className={style.comment}>
      <div className={style.firstLine}>
        <span className={style.userName}>
          {author + ' : '}
        </span>
        <span className={style.date}>
          {createTime}
        </span>
        <span className={style.react}>
          <span className={style.reply} onClick={() => setCommentVisible(true)}>回复</span>
          <span className={style.upVote}>点赞</span>
        </span>
      </div>
      <div className={style.secondLine}>
        {content}
      </div>
      <AppModal title={'回复: ' + author} visible={commentVisible} setVisible={setCommentVisible} confirm={handleSubmit}>
        <AppInput className={style.replyInput} type='textarea' placeholder='请输入回复内容' onChange={handleValueChange}/>
      </AppModal>
    </div>
  )
}

export default Comment