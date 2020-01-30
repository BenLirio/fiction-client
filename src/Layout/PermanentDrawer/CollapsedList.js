import React, { useContext } from 'react'
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core'
import storysContext from '../../context/storys-context'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  nested: {
    marginLeft: theme.spacing(4)
  }
}))

const CollapsedList = () => {
  const storys = useContext(storysContext)
  const classes = useStyles()
  const history = useHistory()
  const onStoryClicked = id => {
    history.push('/stories/' + id)
  }
  return (
    <List component="div" disablePadding className={classes.nested}>
      {storys.map(story => {
        return (
          <ListItem
            key={story.id}
            button
            onClick={() => onStoryClicked(story.id)}
          >
            <ListItemText primary={story.text[0].children[0].text} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default CollapsedList
