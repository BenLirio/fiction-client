import React, { useReducer } from 'react'
import storyReducer from './reducers/storyReducer'

const initialStorysState = []

const storyContext = React.createContext(initialStorysState)

export const StorysContextProvider = ({ children }) => {
  const [storys, dispatch] = useReducer(storyReducer, initialStorysState)
  return (
    <storyContext.Provider value={{ storys, dispatch }}>
      {children}
    </storyContext.Provider>
  )
}

export default storyContext
