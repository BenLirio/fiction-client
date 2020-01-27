import React, { useContext } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core'
import { create, index } from '../../api/storys'
import userContext from '../../user-context'
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()
  const onCreate = text => {
    switch (text) {
      case 'New Story':
        create(token).then(console.log)
        history.push('/stories/asdfasd')
        break
      case 'Stories':
        index(token).then(console.log)
        history.push('/stories')
        break
      default:
        throw new Error()
    }
  }
  const classes = useStyles()
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        {['New Story', 'Stories'].map(text => (
          <ListItem onClick={() => onCreate(text)} button key={text}>
            <ListItemText primary={text} className={classes.listItem} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default PermanentDrawer
