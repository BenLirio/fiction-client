import React, { useContext } from 'react'
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core'
import modalContext from '../../Modal/modal-context'

const useStyles = makeStyles(theme => ({
  root: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: theme.drawerWidth
  }
}))

const Header = () => {
  const { open } = useContext(modalContext)
  const classes = useStyles()
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Button color="inherit" onClick={() => open('SignIn')}>
            Login
          </Button>
          <Button color="inherit" onClick={() => open('SignUp')}>
            Create Account
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header
