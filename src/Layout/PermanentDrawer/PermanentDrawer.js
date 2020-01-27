import React, { useContext } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core'
import { create } from '../../api/storys'
import userContext from '../../user-context'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.drawerWidth
  },
  drawerPaper: {
    width: theme.drawerWidth
  }
}))

const PermanentDrawer = () => {
  const { token } = useContext(userContext)
  const onCreate = () => {
    create(token).then(console.log)
  }
  const classes = useStyles()
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        {['new story', 'Stories', '....', '...'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText
              onClick={onCreate}
              primary={text}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default PermanentDrawer
