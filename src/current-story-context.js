import React, { createContext, useState, useContext, useEffect } from 'react'
import storysContext from './storys-context'
import { useParams } from 'react-router-dom'
import userContext from './user-context'

const currentStoryContext = React.createContext({})

export const CurrentStoryContextProvider = ({ children }) => {
  const { storys } = useContext(storysContext)
  const { id } = useParams()
  const [story, setStory] = useState(null)
  useEffect(() => {
    setStory(storys.find(story => story._id == id) || null)
  }, [storys])
  return (
    <currentStoryContext.Provider value={story}>
      {children}
    </currentStoryContext.Provider>
  )
}

export default currentStoryContext
