import React, { useContext, useState, useCallback } from 'react'
import { index } from '../api/storys'
import userContext from '../user-context'

const useStories = () => {
  const { token } = useContext(userContext)
  const [stories, setStories] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getStories = useCallback(() => {
    setLoading(true)
    index(token)
      .then(res => setStories(res.data.storys))
      .then(() => {
        setError(false)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [token])
  return {
    loading,
    stories,
    error,
    getStories
  }
}

export default useStories
