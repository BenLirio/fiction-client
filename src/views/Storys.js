import React, { useContext, useEffect } from 'react'
import useStorysApi from '../hooks/useStorysApi'
import storysContext from '../context/storys-context'

const Stroys = () => {
  // Reference all of the stories here, starts as [] but
  // once index happens the array fills up
  const storys = useContext(storysContext)
  // give this page access to call an index and display state of request
  const { index, loading, error } = useStorysApi()

  // Index should only change if user token changes,
  // Only re index when the user signs in again.
  useEffect(() => {
    index()
  }, [index])

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
    if (!storys.length) {
      return <p>No stories</p>
    }
    return (
      <ul>
        {storys.map(story => (
          <li key={story.id}>{story.data || 'no data'}</li>
        ))}
      </ul>
    )
  } else {
    // Should not get to this point so if so something has gone wrong
    throw new Error()
  }
}

export default Stroys
