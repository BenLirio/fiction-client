import React from 'react'
import { LinearProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

const Loading = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  )
}

export default Loading
