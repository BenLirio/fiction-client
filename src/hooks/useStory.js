import { useContext, useState, useCallback } from 'react'
import { show } from '../api/storys'
import userContext from '../user-context'
import { useParams } from 'react-router-dom'

// TODO: this logic is repetitive with useStories

const useStory = () => {
  const { token } = useContext(userContext)
  const [story, setStory] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const getStory = useCallback(() => {
    setLoading(true)
    show(token, id)
      .then(res => setStory(res.data.story))
      .then(() => {
        setError(false)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [token, id])
  return {
    loading,
    story,
    error,
    getStory
  }
}

export default useStory
