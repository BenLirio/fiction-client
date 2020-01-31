import React, { useContext } from 'react'
import currentStoryContext from '../context/current-story-context'
import Page from '../components/Page/Page'

const Story = () => {
  const { loading, error } = useContext(currentStoryContext)
  if (error) {
    // There was an auth error most likely
    // go back to home
  } else if (loading) {
    // Loading the story
  } else {
    // Everting should be good
    return <Page />
  }
  return null
}

export default Story
