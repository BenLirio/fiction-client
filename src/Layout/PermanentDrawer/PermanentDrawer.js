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
import useStorysApi from '../../api/useStorysApi'

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
  const storysApi = useStorysApi()
  const history = useHistory()
  const onClick = text => {
    switch (text) {
      case 'New Story':
        storysApi.create()
        break
      case 'Stories':
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
          <ListItem onClick={() => onClick(text)} button key={text}>
            <ListItemText primary={text} className={classes.listItem} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default PermanentDrawer
