import React, { useContext, useState, useEffect } from 'react'
import currentStoryContext from '../../context/current-story-context'

const usePageState = () => {
  const { update, story } = useContext(currentStoryContext)
  const [value, setValue] = useState(story.text)
  useEffect(() => {
    const updateTimer = setTimeout(() => {
      console.log('value', value)
      update(value)
    }, 1000)
    return () => {
      clearTimeout(updateTimer)
    }
  }, [value])
  return [value, setValue]
}

export default usePageState
