import React, { useEffect, useContext } from 'react'
import useStory from '../hooks/useStory'
import userContext from '../user-context'

const Story = () => {
  const { loading, story, error, getStory } = useStory()
  const { token } = useContext(userContext)
  useEffect(() => {
    getStory()
  }, [token])
  return (
    <div>
      <h2>{loading && 'Loading....'}</h2>
      <h2>{story && 'story'}</h2>
      <h2>{error && 'Error'}</h2>
    </div>
  )
}

export default Story
