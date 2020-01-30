import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox'
import useStorysApi from '../../hooks/useStorysApi'
import useRandomNameGenerator from '../../hooks/useRandomName'

const NewStory = () => {
  const generator = useRandomNameGenerator()
  const { create } = useStorysApi()
  const onCreateStory = () => {
    create(generator())
  }
  return (
    <ListItem button onClick={onCreateStory}>
      <ListItemIcon>
        <AddBoxIcon />
      </ListItemIcon>
      <ListItemText primary="New Story" />
    </ListItem>
  )
}

export default NewStory
