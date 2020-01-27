import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
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
    root: {
      display: 'flex'
    },
    drawer: {
      width: theme.drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: theme.drawerWidth
    }
  }
})

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            {['new story', 'Stories', '....', '...'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} className={classes.listItem} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        {children}
      </div>
    </>
  )
}

export default Layout
