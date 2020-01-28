import React from 'react'
import StyledModal from '../../components/StyledModal.js/StyledModal'
import { Button, TextField } from '@material-ui/core'
import useInput from '../../hooks/useInput'
import useAuth from '../../hooks/useAuth'

const SignUpModal = () => {
  const { signUp } = useAuth()
  const [email, bindEmail] = useInput('')
  const [password, bindPassword] = useInput('')
  const [passwordConfirmation, bindPasswordConfirmation] = useInput('')
  const onSignUpClicked = () => {
    signUp({ email, password, passwordConfirmation })
  }
  return (
    <StyledModal name="SignUp">
      <form>
        <TextField label="email" {...bindEmail} />
        <TextField label="password" {...bindPassword} />
        <TextField
          label="password confirmation"
          {...bindPasswordConfirmation}
        />
        <Button onClick={onSignUpClicked}>Login</Button>
      </form>
    </StyledModal>
  )
}

export default SignUpModal
