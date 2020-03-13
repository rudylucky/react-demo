import React, { useState } from 'react'
import style from './index.module.scss'
import { ICommentEntity } from 'services/CommentService'
import AppModal from 'components/base/AppModal'
import AppInput from 'components/base/AppInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import TextArea from 'components/base/AppInput/TextArea'

const CommentItem = (props: ICommentEntity) => {

  const { username: userCode, content, createTime } = props
  const [commentVisible, setCommentVisible] = useState(false)
  const [reply, setReply] = useState('')

  const handleValueChange = (value: string) => {
    setReply(value)
  }

  const handleSubmit = () => {
  }

  const elem = (props: any, layer: number) => {

    console.log('layer', layer)

    if (layer === 0) {
      return null
    }

    return <div className={style.elem}>
      <div className={style.currentLayer}>
        <div className={style.avater}></div>
        <div className={style.contentContainer}>
          <div className={style.author}>
            <span className={style.userCode}>{userCode}</span>
            <span className={style.date}>{createTime ?? new Date().toLocaleDateString()}</span>
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
          <div className={style.content}>
            {content}
          </div>
        </div>
      </div>
      <div className={style.children}>
        {elem(props?.children, --layer)}
      </div>
    </div>
  }

  return (
    <div className={style.commentItem}>
      {elem('', 3)}
    </div>
  )
}

export default CommentItem