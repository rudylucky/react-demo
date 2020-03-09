import React, { useState } from 'react'
import style from './index.module.scss'
import { ICommentEntity } from 'services/CommentService'
import AppModal from 'components/base/AppModal'
import AppInput from 'components/base/AppInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentDots } from '@fortawesome/free-solid-svg-icons'

const CommentItem = (props: ICommentEntity) => {

  const { username: userCode, content, createTime } = props
  const [commentVisible, setCommentVisible] = useState(false)
  const [reply, setReply] = useState('')

  const handleValueChange = (value: string) => {
    setReply(value)
  }

  const handleSubmit = () => {
  }

  return (
    <div className={style.commentItem}>
      <div className={style.avater}></div>
      <div className={style.contentContainer}>
        <div className={style.author}>{userCode}</div>
        <div className={style.content}>
          {content}
        </div>
        <div className={style.dateContainer}>
          <span className={style.date}>2019.12.24</span>
          <span className={style.buttonContainer}>
            <span className={style.buttonItem}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>10</span>
            </span>
            <span className={style.buttonItem}>
              <FontAwesomeIcon icon={faCommentDots} />
              <span>10</span>
            </span>
          </span>
        </div>
      </div>
      <AppModal title={'回复: ' + userCode} visible={commentVisible} setVisible={setCommentVisible} confirm={handleSubmit}>
        <AppInput className={style.replyInput} type='textarea' placeholder='请输入回复内容' onChange={handleValueChange}/>
      </AppModal>
    </div>
  )
}

export default CommentItem