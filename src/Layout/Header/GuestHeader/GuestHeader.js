import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import modalContext from '../../../Modal/modal-context'

const GuestHeader = () => {
  const { open } = useContext(modalContext)
  return (
    <>
      <Button color="inherit" onClick={() => open('SignIn')}>
        Login
      </Button>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => open('SignUp')}
      >
        Create Account
      </Button>
    </>
  )
}

export default GuestHeader
