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

  return (
    <div className={style.appHeader}>
      <div>首页</div>
      <div>生活</div>
      <div>笔记</div>
      <div>关于我</div>
    </div>
  )
}


export default AppHeader
