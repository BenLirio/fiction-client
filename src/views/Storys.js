import React, { useContext, useEffect } from 'react'
import useStorysApi from '../hooks/useStorysApi'
import userContext from '../context/user-context'
import storysContext from '../context/storys-context'

const Stroys = () => {
  const { storys } = useContext(storysContext)
  const { index } = useStorysApi()
  const { token } = useContext(userContext)
  useEffect(() => {
    index()
  }, [token, index])
  if (storys) {
    return <h3>Stories</h3>
  }
  return <h2>No stories</h2>
}

export default Stroys
