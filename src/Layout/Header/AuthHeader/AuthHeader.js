import React, { useContext } from 'react'
import SavedContext from '../../../context/saving-data'
import { Typography } from '@material-ui/core'

const AuthHeader = () => {
  const { saved } = useContext(SavedContext)
  return (
    <div>
      {saved ? (
        <Typography>Saved Changes</Typography>
      ) : (
        <Typography>Saving...</Typography>
      )}
    </div>
  )
}
export default AuthHeader
