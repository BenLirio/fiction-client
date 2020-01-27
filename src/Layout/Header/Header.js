import React, { useContext } from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import modalContext from '../../Modal/modal-context'

const Header = () => {
  const { open } = useContext(modalContext)

  return (
    <>
      <AppBar>
        <Toolbar>
          <Button color="inherit" onClick={() => open('signIn')}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
