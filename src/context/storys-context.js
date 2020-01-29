import React, { useReducer } from 'react'
import storysReducer from '../reducers/storysReducer'

const initialStorysState = []

const storysContext = React.createContext(initialStorysState)
export const storysContextDispatchProvider = React.createContext(null)

export const StorysContextProvider = ({ children }) => {
  const [storys, dispatch] = useReducer(storysReducer, initialStorysState)
  return (
    <storysContext.Provider value={storys}>
      <storysContextDispatchProvider.Provider value={dispatch}>
        {children}
      </storysContextDispatchProvider.Provider>
    </storysContext.Provider>
  )
}

export default storysContext
