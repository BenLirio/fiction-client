import React, { useEffect, useContext } from 'react'
import useStories from '../hooks/useStories'
import userContext from '../user-context'
import { makeStyles, GridList, GridListTile } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default
  },
  GridList: {
    padding: 20
  },
  Story: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    height: '80%',
    textAlign: 'center',
    margin: 20,
    paddingTop: 1,
    '&:hover': {
      boxShadow: theme.shadows[5]
    }
  }
}))

const Storys = () => {
  const history = useHistory()
  const classes = useStyles()
  const { loading, stories, error, getStories } = useStories()
  const { token } = useContext(userContext)
  useEffect(() => {
    getStories()
  }, [token])
  const onClickStory = id => {
    history.push('/stories/' + id)
  }
  const storiesJsx = stories && (
    <GridList cellHeight={300} cols={3} className={classes.GridList}>
      {stories.map(story => (
        <GridListTile key={story._id} onClick={() => onClickStory(story._id)}>
          <div className={classes.Story}>
            <h2>{story.title}</h2>
          </div>
        </GridListTile>
      ))}
    </GridList>
  )
  return (
    <>
      <h3>{loading && 'loading...'}</h3>
      <div className={classes.root}>{storiesJsx}</div>
      <h3>{error && 'error'}</h3>
    </>
  )
}

export default Storys
