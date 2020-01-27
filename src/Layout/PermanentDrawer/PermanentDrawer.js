import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => {
  console.log('theme', theme.drawerWidth)
  return {
    listItem: {
      width: theme.drawerWidth
    }
  }
})

const PermanentDrawer = () => {
  const classes = useStyles()
  return (
    <Drawer variant="permanent">
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} className={classes.listItem} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default PermanentDrawer
