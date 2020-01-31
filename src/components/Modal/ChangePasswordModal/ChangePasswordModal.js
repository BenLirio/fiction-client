import React, { useEffect, useContext } from 'react'
import StyledModal from '../StyledModal/StyledModal'
import { Button, TextField } from '@material-ui/core'
import useInput from '../../../hooks/useInput'
import useAuth from '../../../hooks/useAuth'
import modalContext from '../../../context/modal-context'

const ChangePasswordModal = () => {
  const [oldPassword, bindOldPassword, resetOldPassword] = useInput('')
  const [newPassword, bindNewPassword, resetNewPassword] = useInput('')
  const { changePassword } = useAuth()
  const { current } = useContext(modalContext)
  const onSignInClicked = () => {
    changePassword({ oldPassword, newPassword })
  }
  useEffect(() => {
    resetNewPassword()
    resetOldPassword()
  }, [current, resetOldPassword, resetNewPassword])
  return (
    <StyledModal name="ChangePassword">
      <TextField
        type="oldPassword"
        label="old password"
        {...bindOldPassword}
        autoFocus
      />
      <TextField type="newPassword" label="new" {...bindNewPassword} />
      <Button onClick={onSignInClicked}>Change</Button>
    </StyledModal>
  )
}

export default ChangePasswordModal
