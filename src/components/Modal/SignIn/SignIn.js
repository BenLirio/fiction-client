import React from 'react'
import StyledModal from '../StyledModal/StyledModal'
import { Button, TextField } from '@material-ui/core'
import useInput from '../../../hooks/useInput'
import useAuth from '../../../hooks/useAuth'

const SignInModal = () => {
  const [email, bindEmail] = useInput('')
  const [password, bindPassword] = useInput('')
  const { signIn } = useAuth()
  const onSignInClicked = () => {
    signIn({ email, password })
  }
  return (
    <StyledModal name="SignIn">
      <form>
        <TextField label="email" {...bindEmail} />
        <TextField label="password" {...bindPassword} />
        <Button onClick={onSignInClicked}>Login</Button>
      </form>
    </StyledModal>
  )
}

export default SignInModal
