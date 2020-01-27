import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
