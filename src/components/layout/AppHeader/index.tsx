import { faDesktop, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from 'components/Login'
import SignUp from 'components/SignUp'
import _ from 'lodash'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './index.module.scss'
import { route } from './route'


const AppHeader = () => {

  const uid = _.uniqueId()
  const location = useLocation()

  const [loginVisible, setLoginVisible] = useState(false)
  const [signupVisible, setSignupVisible] = useState(false)

  const menu = route.map(v => <label key={v.code}>
    <Link to={v.path}>
      <input onChange={() => {}} checked={location.pathname.startsWith(v.path)} name={uid} type='radio' />
      <span>{v.name}</span>
    </Link>
  </label>)

  return (
    <>
      <div className={`${style.appHeader} black`} id={style.appHeader}>
        <div className={style.menuContainer}>
          {menu}
        </div>
        <div className={style.infoContainer}>
          <span className={style.loginButtonContainer} onClick={() => setLoginVisible(true)}>
            <FontAwesomeIcon icon={faMobile} />
            <span>登录</span>
          </span>
          <span className={style.signupButtonContainer} onClick={() => setSignupVisible(true)}>
            <FontAwesomeIcon icon={faDesktop} />
            <span>注册</span>
          </span>
        </div>
      </div>
      <Login visible={loginVisible} setVisible={(v: boolean) => setLoginVisible(v ?? false)} />
      <SignUp visible={signupVisible} setVisible={(v: boolean) => setSignupVisible(v ?? false)} />
    </>
  )
}

export default AppHeader
