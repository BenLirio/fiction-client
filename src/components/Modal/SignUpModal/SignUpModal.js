import React, { useContext, useEffect } from 'react'
import StyledModal from '../StyledModal/StyledModal'
import {
  Button,
  TextField,
  FormControl,
  makeStyles,
  Typography
} from '@material-ui/core'
import useInput from '../../../hooks/useInput'
import useAuth from '../../../hooks/useAuth'
import modalContext from '../../../context/modal-context'

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateRows: '80px 1fr 1fr 1fr 80px',
    alignItems: 'center',
    gridGap: '20px',
    gridTemplateColumns: '300px'
  }
}))

const SignUpModal = () => {
  const { current } = useContext(modalContext)
  const classes = useStyles()
  const { signUp } = useAuth()
  const [email, bindEmail, resetEmail] = useInput('')
  const [password, bindPassword, resetPassword] = useInput('')
  const [
    passwordConfirmation,
    bindPasswordConfirmation,
    resetPasswordConfirmation
  ] = useInput('')
  useEffect(() => {
    resetEmail()
    resetPassword()
    resetPasswordConfirmation()
  }, [current, resetEmail, resetPassword, resetPasswordConfirmation])
  const onSignUpClicked = () => {
    signUp({ email, password, passwordConfirmation })
  }
  return (
    <StyledModal name="SignUp">
      <FormControl required error={false} className={classes.root}>
        <Typography variant="h4">Sign Up</Typography>
        <TextField label="Email" {...bindEmail} autoFocus />
        <TextField type="password" label="Password" {...bindPassword} />
        <TextField
          type="password"
          label="Confirm"
          {...bindPasswordConfirmation}
        />

        <Button onClick={onSignUpClicked} variant="contained" color="primary">
          Create Account
        </Button>
      </FormControl>
    </StyledModal>
  )
}

export default SignUpModal
