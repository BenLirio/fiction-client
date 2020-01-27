import React, { useContext } from 'react'
import { Modal, makeStyles, TextField, Button } from '@material-ui/core'
import modalContext from '../modal-context'
import useInput from '../../hooks/useInput'
import { signIn } from '../../hooks/auth'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

const SignIn = () => {
  const { current, close } = useContext(modalContext)
  const classes = useStyles()
  const [email, bindEmail] = useInput('')
  const [password, bindPassword] = useInput('')
  const onSignIn = () => {
    signIn({ email, password })
  }
  return (
    <div>
      <Modal open={current === 'signIn'} onClose={close}>
        <div className={classes.paper}>
          <form>
            <TextField label="email" {...bindEmail} />
            <TextField label="password" {...bindPassword} />
            <Button onClick={onSignIn}>Login</Button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default SignIn
