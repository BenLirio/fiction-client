import React, { useContext, useEffect } from 'react'
import StyledModal from '../StyledModal/StyledModal'
import { Button, TextField } from '@material-ui/core'
import useInput from '../../../hooks/useInput'
import useAuth from '../../../hooks/useAuth'
import modalContext from '../../../context/modal-context'

const SignInModal = () => {
  const [email, bindEmail, resetEmail] = useInput('')
  const [password, bindPassword, resetPassword] = useInput('')
  const { signIn } = useAuth()
  const { current } = useContext(modalContext)
  useEffect(() => {
    resetPassword()
    resetEmail()
  }, [current, resetPassword, resetEmail])
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
