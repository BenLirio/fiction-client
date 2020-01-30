import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { useHistory } from 'react-router-dom'

const SettingsItem = () => {
  const history = useHistory()
  const goToSettings = () => {
    history.push('/settings')
  }
  return (
    <ListItem button onClick={goToSettings}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  )
}

export default SettingsItem
