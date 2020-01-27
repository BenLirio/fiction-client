import React from 'react'
import Header from './Header/Header'
import { makeStyles } from '@material-ui/core'

import PermanentDrawer from './PermanentDrawer/PermanentDrawer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div className={classes.root}>
        <PermanentDrawer />
        {children}
      </div>
    </>
  )
}

export default Layout
