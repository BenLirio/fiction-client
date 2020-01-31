import React from 'react'
import StyledModal from '../StyledModal/StyledModal'
import {
  Button,
  TextField,
  createStyles,
  FormControl,
  makeStyles,
  Typography,
  FormLabel,
  Checkbox,
  FormControlLabel
} from '@material-ui/core'
import useInput from '../../../hooks/useInput'
import useAuth from '../../../hooks/useAuth'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateRows: '80px 1fr 1fr 1fr 80px',
    alignItems: 'center',
    gridGap: '20px',
    gridTemplateColumns: '300px'
  }
}))

const SignUpModal = () => {
  const classes = useStyles()
  const { signUp } = useAuth()
  const [email, bindEmail] = useInput('')
  const [password, bindPassword] = useInput('')
  const [passwordConfirmation, bindPasswordConfirmation] = useInput('')
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
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="This is not my real email"
          />
        </div>
        <Button onClick={onSignUpClicked} variant="contained" color="primary">
          Create Account
        </Button>
        <FormLabel>Label</FormLabel>
      </FormControl>
    </StyledModal>
  )
}

export default SignUpModal
