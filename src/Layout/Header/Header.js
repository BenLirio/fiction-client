import React, { useContext, useState } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Typography
} from '@material-ui/core'
import modalContext from '../../Modal/modal-context'
import userContext from '../../user-context'
import AuthHeader from './AuthHeader/AuthHeader'
import GuestHeader from './GuestHeader/GuestHeader'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  title: {
    flexGrow: 1
  }
}))

const Header = () => {
  const { token } = useContext(userContext)

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Fiction Writer
          </Typography>
          {token ? <AuthHeader /> : <GuestHeader />}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header
