import React, { useEffect, useState } from 'react'
import style from './index.module.scss'

interface ILoadingProps {
  loaded: boolean
  children: any
  wait?: number
}

const Loading = (props: ILoadingProps) => {

  const { loaded, children, wait } = props

  const [end, setEnd] = useState(false)

  useEffect(() => {
    setTimeout(() => setEnd(true), wait ?? 500)
  }, [])

  if (!loaded && end) {
    return <div className={style.loading}>
      <div className={style.icon}></div>
      <div>加载中，请稍候</div>
    </div>
  }

  return children
}

export default Loading