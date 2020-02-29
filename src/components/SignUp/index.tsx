import React from 'react'
import AppModal from 'components/base/AppModal'
import AppInput from 'components/base/AppInput'

interface SignUpProps {
  visible: boolean
  setVisible: Function
}

const SignUp = (props: SignUpProps) => {

  const { visible, setVisible } = props

  const func = () => { }

  return (
    <div>
      <AppModal setVisible={setVisible} visible={visible}>
        <div>密码：<AppInput onChange={func} placeholder='请输入密码' /></div>
        <div>邮箱：<AppInput onChange={func} placeholder='请输入邮箱' /></div>
      </AppModal>
    </div>
  )
}

export default SignUp