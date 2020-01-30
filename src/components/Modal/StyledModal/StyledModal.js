import React, { useContext } from 'react'
import {
  Modal,
  makeStyles,
  Fade,
  Grow,
  fade,
  Slide,
  Backdrop,
  FormControl
} from '@material-ui/core'
import modalContext from '../../../context/modal-context'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
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
    <Modal
      className={classes.modal}
      open={current === name}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 100
      }}
    >
      <Fade in={current === name}>
        <div className={classes.paper}>{children}</div>
      </Fade>
    </Modal>
  )
}

export default StyledModal
