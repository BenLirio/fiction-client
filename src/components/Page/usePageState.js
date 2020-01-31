import { useContext, useState, useEffect } from 'react'
import currentStoryContext from '../../context/current-story-context'
import SavedContext from '../../context/saving-data'

const usePageState = () => {
  const { update, story } = useContext(currentStoryContext)
  const [value, setValue] = useState(story.text)
  const { setSaved } = useContext(SavedContext)
  useEffect(() => {
    setSaved(false)
    const updateTimer = setTimeout(() => {
      update(value)
    }, 1000)
    return () => {
      clearTimeout(updateTimer)
    }
  }, [value, setSaved, update])
  return [value, setValue]
}

export default usePageState
