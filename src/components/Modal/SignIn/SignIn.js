import React from 'react'
import StyledModal from '../StyledModal/StyledModal'
import { Button, TextField, FormControl, Fade } from '@material-ui/core'
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
      <TextField type="email" label="Email" {...bindEmail} autoFocus />
      <TextField type="password" label="Password" {...bindPassword} />
      <Button onClick={onSignInClicked}>Login</Button>
    </StyledModal>
  )
}

export default SignInModal
