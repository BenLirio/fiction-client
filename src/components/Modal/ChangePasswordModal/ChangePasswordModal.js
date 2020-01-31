import React from 'react'
import StyledModal from '../StyledModal/StyledModal'
import { Button, TextField, FormControl, Fade } from '@material-ui/core'
import useInput from '../../../hooks/useInput'
import useAuth from '../../../hooks/useAuth'

const ChangePasswordModal = () => {
  const [oldPassword, bindOldPassword] = useInput('')
  const [newPassword, bindNewPassword] = useInput('')
  const { changePassword } = useAuth()
  const onSignInClicked = () => {
    changePassword({ oldPassword, newPassword })
  }
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
