import React, { useContext, useEffect, useState } from 'react'
import {
  Drawer,
  List,
  makeStyles,
  Divider,
  IconButton
} from '@material-ui/core'
import userContext from '../../context/user-context'
import NewStory from './NewStory'
import StoryList from './StoryList'
import useStorysApi from '../../hooks/useStorysApi'
import DrawerContext from '../../context/drawer-context'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.drawerWidth
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
  }, [])

  const classes = useStyles()
  return (
    <Drawer
      variant="persistent"
      open={drawerOpen}
      className={classes.drawer}
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
        <Divider />
        <StoryList />
      </List>
    </Drawer>
  )
}

export default PermanentDrawer
