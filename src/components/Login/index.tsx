import Input from 'components/base/AppInput/Input'
import AppModal from 'components/base/AppModal'
import { Form, FormField, FormStore } from 'components/Form'
import React, { useRef } from 'react'
import style from './index.module.scss'
import AppButton from 'components/base/AppButton'

interface LoginProps {
  visible: boolean
  setVisible: Function
}

const Login = (props: LoginProps) => {


  const { visible, setVisible } = props

  const values = new FormStore()

  const handleLogin = () => {
    console.log(values)
  }

  return (
    <div className={style.login}>
      <AppModal className={style.loginFrame} title="登录" setVisible={setVisible} visible={visible}>
        <Form store={values}>
          <FormField name="username" label='用户名：' className={style.usernameField}>
            <Input className={style.usernameInput} />
          </FormField>
          <FormField name="password" label='密码：' className={style.passwordField}>
            <Input className={style.passwordInput} type='password'/>
          </FormField>
          <AppButton onClick={handleLogin}>登录</AppButton>
        </Form>
      </AppModal>
    </div>
  )
}

export default Login