import React, { useContext } from 'react'
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  IconButton
} from '@material-ui/core'
import userContext from '../../context/user-context'
import AuthHeader from './AuthHeader/AuthHeader'
import GuestHeader from './GuestHeader/GuestHeader'
import MenuIcon from '@material-ui/icons/Menu'
import DrawerContext from '../../context/drawer-context'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarDrawerOpen: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: theme.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  title: {
    flexGrow: 1
  },
  menuIcon: {
    marginRight: 20
  },
  hide: {
    display: 'none'
  }
}))

const Header = () => {
  const { token } = useContext(userContext)
  const classes = useStyles()
  const { openDrawer, drawerOpen } = useContext(DrawerContext)

  return (
    <div className={classes.root}>
      <AppBar
        className={clsx(classes.appBar, drawerOpen && classes.appBarDrawerOpen)}
      >
        <Toolbar>
          {token && (
            <IconButton
              color="inherit"
              className={clsx(classes.menuIcon, drawerOpen && classes.hide)}
              onClick={openDrawer}
            >
              <MenuIcon color="inherit" />
            </IconButton>
          )}
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
