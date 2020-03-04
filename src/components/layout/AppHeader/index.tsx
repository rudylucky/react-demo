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
      <label><input name='menu' type='radio' defaultChecked /><span>首页</span></label>
      <label><input name='menu' type='radio' /><span>生活</span></label>
      <label><input name='menu' type='radio' /><span>笔记</span></label>
      <label><input name='menu' type='radio' /><span>关于我</span></label>
    </div>
  )
}


export default AppHeader
