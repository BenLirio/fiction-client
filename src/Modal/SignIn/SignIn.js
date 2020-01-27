import React, { useState, useContext } from 'react'
import { Modal, makeStyles } from '@material-ui/core'
import modalContext from '../modal-context'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

const SignIn = () => {
  const { current } = useContext(modalContext)
  const classes = useStyles()
  const [open] = useState(false)
  return (
    <div>
      <Modal open={current === 'signIn'}>
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default SignIn
