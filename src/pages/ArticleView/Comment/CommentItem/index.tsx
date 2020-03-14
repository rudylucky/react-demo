import { faCommentDots, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ICommentEntity } from 'services/CommentService'
import CommentFrame from '../CommentFrame'
import style from './index.module.scss'

type ICommentItemProps = ICommentEntity & {
  className?: string
  commentCallback?: Function
}

const CommentItem = (props: ICommentItemProps) => {

  const { userCode, code, content, username, createTime, children, articleCode, className, commentCallback } = props

  const [replyVisible, setReplyVisible] = useState(false)

  const handleCommentSubmit = () => {
    commentCallback && commentCallback()
    setReplyVisible(false)
  }

  return <div className={`${style.commentItem ?? ''} ${className ?? ''}`}>
    <div className={style.currentLayer}>
      <div className={style.avater}></div>
      <div className={style.contentContainer}>
        <div className={style.author}>
          <span className={style.userCode}>{username}</span>
          <span className={style.date}>{createTime ?? new Date().toLocaleDateString()}</span>
          <span className={style.buttonContainer}>
            <span className={style.buttonItem}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>10</span>
            </span>
            <span className={style.buttonItem} onClick={() => setReplyVisible(!replyVisible)}>
              <FontAwesomeIcon icon={faCommentDots} />
              <span>回复</span>
            </span>
          </span>
        </div>
        <div className={style.content}>
          {content}
        </div>
      </div>
    </div>
    <CommentFrame
      parentCode={code}
      submitCallback={handleCommentSubmit}
      articleCode={articleCode!}
      userCode={userCode!}
      hidden={!replyVisible}
      buttonName='回复'
      className={style.commentFrame}
    />
    <div className={style.children}>
      {children?.map(v => <CommentItem key={v.code} {...v} commentCallback={commentCallback} />)}
    </div>
  </div>
}

export default CommentItem