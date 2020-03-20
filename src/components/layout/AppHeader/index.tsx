import { faDesktop, faMobile, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCurrentUser } from 'common/util'
import Login from 'components/Login'
import SignUp from 'components/SignUp'
import _ from 'lodash'
import React, { useEffect, useState, Dispatch } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { IStore } from 'reducers'
import style from './index.module.scss'
import { route } from './route'
import Dropdown from 'components/base/Dropdown'
import { IUserAction, ILoginoutAction } from 'reducers/userReducer'


const AppHeader = () => {

  const uid = _.uniqueId()
  const location = useLocation()

  const [loginVisible, setLoginVisible] = useState(true)
  const [signupVisible, setSignupVisible] = useState(false)
  const username = useSelector<IStore, string | undefined>(v => v.userState.currentUser?.fullName)
  const [fullName, setFullName] = useState<string | undefined>(getCurrentUser()?.fullName)

  const dispatch = useDispatch<Dispatch<ILoginoutAction>>()

  useEffect(() => {
    setFullName(getCurrentUser()?.fullName)
  }, [username])

  const menu = route.map(v => <label key={v.code}>
    <Link to={v.path}>
      <input onChange={() => {}} checked={location.pathname.startsWith(v.path)} name={uid} type='radio' />
      <span>{v.name}</span>
    </Link>
  </label>)

  const handleLogout = () => {
    console.log('ssss')
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <>
      <div className={`${style.appHeader} black`} id={style.appHeader}>
        <div className={style.menuContainer}>
          {menu}
        </div>
        <div className={style.infoContainer}>
          {
            fullName
              ? <Dropdown className={style.dropown}
                option={
                  [
                    { label: '设置', callback: ()=> {} },
                    { label: '个人信息', callback: ()=> {} },
                    { label: '退出登录', callback: handleLogout },
                  ]
                }
              >
                <span className={style.userContainer}>
                  <FontAwesomeIcon icon={faUser} />
                  <span>{fullName}</span>
                </span>
              </Dropdown>
              : <>
                <span className={style.loginButtonContainer} onClick={() => setLoginVisible(true)}>
                  <FontAwesomeIcon icon={faMobile} />
                  <span>登录</span>
                </span>
                {/* <span className={style.signupButtonContainer} onClick={() => setSignupVisible(true)}>
                  <FontAwesomeIcon icon={faDesktop} />
                  <span>注册</span>
                </span> */}
              </>
          }
        </div>
      </div>
      <Login visible={loginVisible} setVisible={(v: boolean) => setLoginVisible(v ?? false)} />
      <SignUp visible={signupVisible} setVisible={(v: boolean) => setSignupVisible(v ?? false)} />
    </>
  )
}

export default AppHeader
