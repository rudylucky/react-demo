import React from 'react'
import AppModal from 'components/base/AppModal'
import { Form, FormField, FormStore } from 'components/Form'

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
    <div>
      <AppModal title="登录" setVisible={setVisible} visible={visible}>
        <Form store={values} onSubmit={handleLogin}>
          <FormField name="username" label='用户名：'>
            <input />
          </FormField>
          <FormField name="password" label='密码：'>
            <input type="password" />
          </FormField>
          <button>登录</button>
        </Form>
      </AppModal>
    </div>
  )
}

export default Login