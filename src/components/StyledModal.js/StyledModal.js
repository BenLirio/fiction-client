import React, { useContext } from 'react'
import { Modal, makeStyles } from '@material-ui/core'
import modalContext from '../../Modal/modal-context'

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

const StyledModal = ({ name, children }) => {
  const { current, close, loading } = useContext(modalContext)
  const classes = useStyles()
  return (
    <>
      <Modal open={current === name} onClose={close}>
        <div className={classes.paper}>
          <p>{loading && 'LOADING...'}</p>
          {children}
        </div>
      </Modal>
    </>
  )
}

export default StyledModal
