import React, { useState } from 'react'
import {
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ListIcon from '@material-ui/icons/List'
import CollapsedList from './CollapsedList'

const StoryList = () => {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <>
      <ListItem button onClick={toggleExpanded}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="My Stories" />
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CollapsedList />
      </Collapse>
    </>
  )
}
export default StoryList
