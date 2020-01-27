import React, { useEffect, useContext } from 'react'
import useStories from '../hooks/useStories'
import userContext from '../user-context'

const Storys = () => {
  const { loading, stories, error, getStories } = useStories()
  const { token } = useContext(userContext)
  useEffect(() => {
    getStories()
  }, [token])
  return (
    <>
      <h3>{loading && 'loading...'}</h3>
      <h1>{stories && 'Stories'}</h1>
      <h3>{error && 'error'}</h3>
    </>
  )
}

export default Storys
