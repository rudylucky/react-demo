import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import AppInput from 'components/base/AppInput'
import consts from 'common/consts'
import Login from 'components/Login'
import SignUp from 'components/SignUp'

const style = require('./index.module.scss')

const AppHeader = () => {

  const username = '洛霖'

  const [loginVisible, setloginVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)

  const dispatch = useDispatch()
  dispatch({ type: 'UPDATE_USER', name: username })

  const handleSearch = (words: string) => {
    console.log(words)
  }

  const login = !!sessionStorage.getItem(consts.TOKEN)

  return (
    <div className={style.appHeader}>
      {
        login ?
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
          :
          <div className={style.headerItem}>
            <span className={style.loginSignup} onClick={() => setloginVisible(true)}>登录</span>
            <span className={style.loginSignup} onClick={() => setSignUpVisible(true)}>注册</span>
          </div>
      }
      <div className={style.headerItem}>
        <div className={style.itemContainer}>
          <AppInput onChange={handleSearch} />
          <FontAwesomeIcon className={style.itemIcon} icon={faSearch} />
        </div>
      </div>
      <Login visible={loginVisible} setVisible={setloginVisible} />
      <SignUp visible={signUpVisible} setVisible={setSignUpVisible} />
    </div>
  )
}

export default AppHeader
