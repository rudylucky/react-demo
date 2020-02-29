import React from 'react'
import AppModal from 'components/base/AppModal'
import AppInput from 'components/base/AppInput'

interface LoginProps {
  visible: boolean
  setVisible: Function
}

const Login = (props: LoginProps) => {

  const { visible, setVisible } = props

  const func = () => { }

  return (
    <div>
      <AppModal title="登录" setVisible={setVisible} visible={visible}>
        <div>用户id：<AppInput onChange={func} placeholder='用户名/邮箱' /></div>
        <div>密码：<AppInput onChange={func} placeholder='密码' /></div>
      </AppModal>
    </div>
  )
}

export default Login