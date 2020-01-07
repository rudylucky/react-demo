import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const style = require('./index.module.scss')


const AppHeader = () => {

  const username = '刘迪'

  return (
    <div className={style.appHeader}>
      <div className={style.userContainer}>
        <span className={style.username}>{username}</span>
        <FontAwesomeIcon className={style.userIcon} icon={faUser} />
      </div>
    </div>
  )
}

export default AppHeader
