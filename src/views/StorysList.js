import React, { useContext } from 'react'
import storysContext from '../context/storys-context'
import {
  GridList,
  GridListTile,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import useStorysApi from '../hooks/useStorysApi'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20
  },
  list: {
    background: theme.palette.background.paper,
    width: 400
  }
}))

const StorysList = () => {
  const { destroy } = useStorysApi()
  const handleDelete = id => {
    destroy(id)
  }
  const classes = useStyles()
  const storys = useContext(storysContext)
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {storys.map(story => {
          return (
            <ListItem button key={story.id}>
              <ListItemText primary={story.text[0].children[0].text} />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handleDelete(story.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

export default StorysList
