import React, { useContext } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useStorysApi from '../../hooks/useStorysApi'
import userContext from '../../context/user-context'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.drawerWidth
  },
  drawerPaper: {
    width: theme.drawerWidth
  },
  toolbar: theme.mixins.toolbar
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
      variant="persistent"
      open={!!token}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.toolbar} />
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
