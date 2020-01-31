import React, { useContext } from 'react'
import { Typography, makeStyles, Fade, Button } from '@material-ui/core'
import storysContext from '../context/storys-context'
import useAuth from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(10)
  }
}))

const Profile = () => {
  const classes = useStyles()
  const storys = useContext(storysContext)
  const { signOut } = useAuth()
  const history = useHistory()
  const onSignOut = () => {
    signOut()
  }
  return (
    <Fade in={true}>
      <div className={classes.root}>
        <Typography variant="h2" align="center">
          Total stories: {storys.length}, keep writing!
        </Typography>
        <Button
          style={{ marginTop: '20px' }}
          variant="outlined"
          onClick={onSignOut}
        >
          Log out
        </Button>
      </div>
    </Fade>
  )
}

export default Profile
