import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import AppInput from 'components/base/AppInput'

const style = require('./index.module.scss')


const AppHeader = () => {

  const username = '洛霖'

  const dispatch = useDispatch()
  dispatch({ type: 'UPDATE_USER', name: username })

  const handleSearch = (words: string) => {
    console.log(words)
  }

  return (
    <div className={style.appHeader}>
      <div className={style.headerItem}>
        <div className={style.userContainer}>
          <span className={style.username}>{username}</span>
          <FontAwesomeIcon className={style.itemIcon} icon={faUser} />
        </div>
        <div className={style.settingContainer}>
          <div className={style.userSetting}>设置</div>
          <div className={style.userSetting}>修改密码</div>
          <div className={style.userSetting}>个人信息</div>
          <div className={style.userSetting}>退出登录</div>
        </div>
      </div>
      <div className={style.headerItem}>
        <AppInput onChange={handleSearch} />
        <FontAwesomeIcon className={style.itemIcon} icon={faSearch} />
      </div>
    </div>
  )
}

export default AppHeader
