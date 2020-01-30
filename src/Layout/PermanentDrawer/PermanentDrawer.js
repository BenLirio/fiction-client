import React, { useContext } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  ListItemIcon,
  Divider
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useStorysApi from '../../hooks/useStorysApi'
import userContext from '../../context/user-context'
import AddBoxIcon from '@material-ui/icons/AddBox'
import ListIcon from '@material-ui/icons/List'
import useRandomNameGenerator from '../../hooks/useRandomName'

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
  const { create } = useStorysApi()
  const history = useHistory()
  const generator = useRandomNameGenerator()
  const onClick = text => {
    switch (text) {
      case 'New Story':
        const name = generator()
        create(name)
        break
      case 'My Stories':
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
        <ListItem button onClick={() => onClick('New Story')}>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="New Story" className={classes.listItem} />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => onClick('My Stories')}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="My Stories" className={classes.listItem} />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default PermanentDrawer

// {
//   ;['New Story', 'Stories'].map(text => (
//     <ListItem onClick={() => onClick(text)} button key={text}>
//       <ListItemText primary={text} className={classes.listItem} />
//     </ListItem>
//   ))
// }
