import React, { useContext, useEffect } from 'react'
import currentStoryContext from '../current-story-context'
import useStoryApi from '../api/useStorysApi'
import userContext from '../user-context'
import Page from '../components/Page/Page'

const Story = () => {
  const story = useContext(currentStoryContext)
  const { token } = useContext(userContext)
  const { index } = useStoryApi()
  useEffect(() => {
    index()
  }, [token])
  if (story) {
    return <Page />
  }
  return <div>story</div>
}

export default Story
