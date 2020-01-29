import React, { useContext, useEffect } from 'react'
import currentStoryContext from '../context/current-story-context'
import useStoryApi from '../hooks/useStorysApi'
import userContext from '../context/user-context'
import Page from '../components/Page/Page'

const Story = () => {
  const story = useContext(currentStoryContext)
  const { token } = useContext(userContext)
  const { index } = useStoryApi()
  useEffect(() => {
    index()
  }, [token, index])
  if (story) {
    return <Page />
  }
  return <div>story</div>
}

export default Story
