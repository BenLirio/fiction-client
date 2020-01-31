import React, { useState, useContext } from 'react'
import { Switch, Typography, makeStyles, Fade } from '@material-ui/core'
import ThemeEditor from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}))

const Settings = () => {
  const classes = useStyles()
  const editTheme = useContext(ThemeEditor)
  const onChangeMode = e => {
    editTheme(theme => ({
      ...theme,
      palette: {
        type: e.target.checked ? 'dark' : 'light'
      }
    }))
  }
  return (
    <Fade in={true}>
      <div className={classes.root}>
        <Typography variant="h5">Dark Mode:</Typography>
        <Switch onChange={onChangeMode}></Switch>
      </div>
    </Fade>
  )
}

export default Settings
