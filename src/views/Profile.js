import React, { useContext } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import storysContext from '../context/storys-context'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(10)
  }
}))

const Profile = () => {
  const classes = useStyles()
  const storys = useContext(storysContext)
  return (
    <div className={classes.root}>
      <Typography variant="h2" align="center">
        Total stories: {storys.length}, keep writing!
      </Typography>
    </div>
  )
}

export default Profile
