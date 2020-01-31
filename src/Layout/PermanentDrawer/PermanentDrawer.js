import React, { useContext, useEffect } from 'react'
import {
  Drawer,
  List,
  makeStyles,
  Divider,
  IconButton
} from '@material-ui/core'
import NewStory from './NewStory'
import StoryList from './StoryList'
import useStorysApi from '../../hooks/useStorysApi'
import DrawerContext from '../../context/drawer-context'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Profile from './ProfileItem'
import Settings from './SettingsItem'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 0,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  drawerPaper: {
    width: theme.drawerWidth
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  }
}))

const PermanentDrawer = () => {
  const { index } = useStorysApi()
  const { drawerOpen, closeDrawer } = useContext(DrawerContext)
  // Indexing stories so that it gives my menu bar a chance to load them
  // before the user presses the button.
  useEffect(() => {
    index()
  }, [index])

  const classes = useStyles()
  return (
    <Drawer
      variant="persistent"
      open={drawerOpen}
      className={clsx(classes.drawer, drawerOpen && classes.drawerOpen)}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <NewStory />
        <StoryList />
        <Divider />
        <Profile />
        <Settings />
      </List>
    </Drawer>
  )
}

export default PermanentDrawer
