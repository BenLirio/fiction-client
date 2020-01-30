import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useReducer
} from 'react'
import storysContext from './storys-context'
import { useParams } from 'react-router-dom'
import useStorysApi from '../hooks/useStorysApi'
import storysReducer from '../reducers/storysReducer'

const currentStoryContext = React.createContext({})

// This context is a bit complex and confusing but it works for now
// FIX latter
// Have to fix this function now
export const CurrentStoryContextProvider = ({ children }) => {
  // This will not change unless the user changes pages
  const { id } = useParams()

  // show relies on ajax and dispatch
  // dispatch is set, and I think ajax is as well
  // NEED to call multiple times so that loading and error are
  // bound to the right objects
  const { show, loading, error } = useStorysApi()

  // This is to bind the id to the context for update and destroy
  const { update: idUpdate } = useStorysApi()
  const update = useCallback(
    data => {
      idUpdate(id, JSON.stringify(data))
    },
    [id]
  )
  const { destroy: idDestroy } = useStorysApi()
  const destroy = useCallback(() => {
    idDestroy(id)
  }, [id])

  // only run if the id changes
  useEffect(() => {
    show(id)
  }, [id])
  const story = useContext(storysContext).find(story => story.id === id)
  if (story) {
    return (
      <currentStoryContext.Provider
        value={{ story, loading, error, update, destroy }}
      >
        {children}
      </currentStoryContext.Provider>
    )
  } else {
    return null
  }
}

export default currentStoryContext
