import React, { useReducer } from 'react'
import storysReducer from '../reducers/storysReducer'

const initialStorysState = []

const storysContext = React.createContext(initialStorysState)

export const StorysContextProvider = ({ children }) => {
  const [storys, dispatch] = useReducer(storysReducer, initialStorysState)
  return (
    <storysContext.Provider value={{ storys, dispatch }}>
      {children}
    </storysContext.Provider>
  )
}

export default storysContext
