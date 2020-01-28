import React, { useContext, useEffect } from 'react'
import useStorysApi from '../api/useStorysApi'
import userContext from '../user-context'

const Stroys = () => {
  const { index } = useStorysApi()
  const { token } = useContext(userContext)
  useEffect(() => {
    index()
  }, [token])

  return <h2>No stories</h2>
}

export default Stroys
