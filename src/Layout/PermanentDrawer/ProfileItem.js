import React from 'react'
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import { useHistory } from 'react-router-dom'

const ProfileItem = () => {
  const history = useHistory()
  const goToProfile = () => {
    history.push('/profile')
  }
  return (
    <ListItem button onClick={goToProfile}>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
  )
}

export default ProfileItem
