import React from 'react'

import style from './index.module.scss'
import Notification from 'components/Notification'

export interface TestProps {

}

const Test = (props: TestProps) => {
  return (
    <div className={style.test}>
    </div>
  )
}

export default Test