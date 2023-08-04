// Write your code here
import {useState} from 'react'
import {Container, Card, Para, Heading, CustomInput} from './styledComponents'

const PasswordValidator = () => {
  const [password, changePassword] = useState('')
  const onChangePassword = event => {
    changePassword(event.target.value)
  }
  const isValidPassword = password.length > 7
  const passwordText = !isValidPassword
    ? 'Your password must be at least 8 characters'
    : ''
  return (
    <Container>
      <Card>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <CustomInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />

        <Para color="#ef4444">{passwordText}</Para>
      </Card>
    </Container>
  )
}
export default PasswordValidator
