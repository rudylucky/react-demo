import React from 'react'
import AppModal from 'components/base/AppModal'
import { Form, FormField, FormStore } from 'components/Form'
import Input from 'components/base/AppInput/Input'
import AppButton from 'components/base/AppButton'
import style from './index.module.scss'

interface SignUpProps {
  visible: boolean
  setVisible: Function
}

const SignUp = (props: SignUpProps) => {

  const { visible, setVisible } = props

  const values = new FormStore()

  const handleLogin = () => {
    console.log(values)
  }

  return (
    <div className={style.signup}>
      <AppModal setVisible={setVisible} visible={visible}>
        <Form store={values}>
          <FormField name="username" label='用户名：' className={style.usernameField}>
            <Input />
          </FormField>
          <FormField name="email" label='邮箱：' className={style.emailField}>
            <Input />
          </FormField>
          <FormField name="captcha" label='邮箱验证码：' className={style.captchaField}>
            <Input />
          </FormField>
          <AppButton onClick={handleLogin}>注册</AppButton>
        </Form>
      </AppModal>
    </div>
  )
}

export default SignUp