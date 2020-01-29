import React, { useContext, useEffect } from 'react'
import useStorysApi from '../hooks/useStorysApi'
import storysContext from '../context/storys-context'

const Stroys = () => {
  // Reference all of the stories here, starts as [] but
  // once index happens the array fills up
  const storys = useContext(storysContext)
  const { index, loading, error } = useStorysApi()

  useEffect(() => {
    index()
  }, [index])
}

export default Stroys
