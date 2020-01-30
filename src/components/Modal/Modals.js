import React from 'react'
import SignUpModal from './SignUpModal/SignUpModal'
import SignInModal from './SignIn/SignIn'
import { Fade } from '@material-ui/core'

const Modals = () => {
  return (
    <>
      <SignUpModal />
      <SignInModal />
    </>
  )
}

export default Modals
