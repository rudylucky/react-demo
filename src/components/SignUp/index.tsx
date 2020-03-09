import React from 'react'
import AppModal from 'components/base/AppModal'
import { Form, FormField, FormStore } from 'components/Form'

interface SignUpProps {
  visible: boolean
  setVisible: Function
}

const SignUp = (props: SignUpProps) => {

  const { visible, setVisible } = props

  const values = new FormStore()

  const handleLogin = () => {
  }

  return (
    <div>
      <AppModal setVisible={setVisible} visible={visible}>
        <Form store={values} onSubmit={handleLogin}>
          <FormField name="username" label='用户名：'>
            <input />
          </FormField>
          <FormField name="email" label='邮箱：'>
            <input />
          </FormField>
          <FormField name="captcha" label='邮箱验证码：'>
            <input />
          </FormField>
          <button>下一步</button>
        </Form>
      </AppModal>
    </div>
  )
}

export default SignUp