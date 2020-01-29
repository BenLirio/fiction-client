import React, { useContext } from 'react'
import { Modal, makeStyles, Fade, Grow } from '@material-ui/core'
import modalContext from '../../../context/modal-context'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 400,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: theme.shape.borderRadius,
    transform: 'translate(-50%, -50%)'
  }
}))

const StyledModal = ({ name, children }) => {
  const { current, close, loading, setLoading, error, setError } = useContext(
    modalContext
  )
  const classes = useStyles()
  const closeModal = () => {
    setError(false)
    setLoading(false)
    close()
  }
  return (
    <Modal open={current === name} onClose={closeModal}>
      <div className={classes.paper}>
        <p>{loading && 'LOADING...'}</p>
        <p>{error && '!!!!ERROR!!!!'}</p>
        {children}
      </div>
    </Modal>
  )
}

export default StyledModal
