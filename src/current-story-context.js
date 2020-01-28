import React, { createContext, useState, useContext } from 'react'
import storysContext from './storys-context'
import { useParams } from 'react-router-dom'

const currentStoryContext = React.createContext({})

export const CurrentStoryContextProvider = ({ children }) => {
  const { storys } = useContext(storysContext)
  const { id } = useParams()
  return (
    <currentStoryContext.Provider
      value={storys.find(story => story._id == id) || {}}
    >
      {children}
    </currentStoryContext.Provider>
  )
}

export default currentStoryContext
