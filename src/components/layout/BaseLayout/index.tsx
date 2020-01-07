import React from 'react'
import AppHeader from '../AppHeader'
import AppMenu from '../AppMenu'

const style = require('./index.module.scss')
const BaseLayout = () => {

  return (
    <div className={style.baseLayout}>
      <div className={style.header}>
        <AppHeader />
      </div>
      <div className={style.menuBar}>
        <AppMenu />
      </div>
      <div className={style.content}></div>
    </div>
  )
}

export default BaseLayout
