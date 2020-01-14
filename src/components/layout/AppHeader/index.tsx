import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const style = require('./index.module.scss')


const AppHeader = () => {

  const username = '洛霖'

  return (
    <div className={style.appHeader}>
      <div className={style.userDropdown}>
        <div className={style.userContainer}>
          <span className={style.username}>{username}</span>
          <FontAwesomeIcon className={style.userIcon} icon={faUser} />
        </div>
        <div className={style.settingContainer}>
          <div className={style.userSetting}>设置</div>
          <div className={style.userSetting}>修改密码</div>
          <div className={style.userSetting}>个人信息</div>
          <div className={style.userSetting}>退出登录</div>
        </div>
      </div>
    </div>
  )
}

export default AppHeader
