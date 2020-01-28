import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    height: 400,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    margin: '20px auto 0'
  }
}))

const Page = () => {
  const classes = useStyles()
  return <div className={classes.root}>Page</div>
}

export default Page
