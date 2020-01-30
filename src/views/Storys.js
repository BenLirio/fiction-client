import React, { useEffect, useCallback } from 'react'
import useStorysApi from '../hooks/useStorysApi'
import useRandomNameGenerator from '../hooks/useRandomName'
import Loading from './Loading'
import ErrorBar from './ErrorBar'
import StorysList from './StorysList'

const Stroys = () => {
  // give this page access to call an index and display state of request
  // Since this function exports an object, I am using object destructuring
  // with renaming to specify which states to use
  const { index, loading: indexLoading, error: indexError } = useStorysApi({
    loading: true
  })
  const { create, loading: createLoading, error: createError } = useStorysApi()

  const generator = useRandomNameGenerator()
  // Index should only change if user token changes,
  // Only re index when the user signs in again.
  useEffect(() => {
    index()
  }, [index])

  if (indexError) {
    // Failed to index the stories
    // most likely signed out or connection issue
    return (
      <ErrorBar
        message="Oops. We can't find your stories"
        alertMessage="Couldn't find stories"
      />
    )
  } else if (indexLoading) {
    // stories are loading should only briefly show,
    // Show some sort of indicator to the user
    return <Loading />
  } else {
    // Neither error or loading, which means stories should have loaded
    return <StorysList />
  }
}

export default Stroys
