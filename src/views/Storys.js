import React, { useContext, useEffect, useCallback } from 'react'
import useStorysApi from '../hooks/useStorysApi'
import storysContext from '../context/storys-context'
import { Button } from '@material-ui/core'
import useRandomNameGenerator from '../hooks/useRandomName'
import { Link } from 'react-router-dom'

const Stroys = () => {
  // Reference all of the stories here, starts as [] but
  // once index happens the array fills up
  const storys = useContext(storysContext)
  // give this page access to call an index and display state of request
  const { index, create, loading, error } = useStorysApi()
  const generator = useRandomNameGenerator()

  // Index should only change if user token changes,
  // Only re index when the user signs in again.
  useEffect(() => {
    index()
  }, [index])

  // When the user click create a story
  const onCreateStory = useCallback(() => {
    const name = generator()
    create(name)
  }, [])

  if (error) {
    // Failed to index the stories
    // most likely signed out or connection issue
    return <p>error</p>
  } else if (loading) {
    // stories are loading should only briefly show,
    // Show some sort of indicator to the user
    return <p>loading...</p>
  } else if (storys) {
    // Neither error or loading, which means stories should have loaded
    return (
      <>
        <p>{storys.length || 'no stories'}</p>
        <Button onClick={onCreateStory}>Create story</Button>
        <ul>
          {storys.map(story => {
            return (
              <li key={story.id}>
                <Link to={`stories/${story.id}`}>
                  {story.text[0].children[0].text || 'no data'}
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  } else {
    // Should not get to this point so if so something has gone wrong
    throw new Error()
  }
}

export default Stroys
