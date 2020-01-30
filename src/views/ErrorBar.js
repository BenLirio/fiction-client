import React, { useState } from 'react'
import { Snackbar, Typography, makeStyles } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    width: '100%',
    padding: 20
  }
}))

const ErrorBar = ({ message, alertMessage }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className={classes.root}>
        <Typography variant="h3">{message}</Typography>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {alertMessage || message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ErrorBar
