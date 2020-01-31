import React from 'react'
import SignUpModal from './SignUpModal/SignUpModal'
import SignInModal from './SignIn/SignIn'
import { Fade } from '@material-ui/core'
import ChangePasswordModal from './ChangePasswordModal/ChangePasswordModal'

const Modals = () => {
  return (
    <>
      <SignUpModal />
      <SignInModal />
      <ChangePasswordModal />
    </>
  )
}

export default Modals
