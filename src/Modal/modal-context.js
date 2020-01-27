import React from 'react'

const initialModalState = {
  current: 'none'
}

const modalContext = React.createContext(initialModalState)

export const ModalContextProvider = ({ children }) => {
  return (
    <modalContext.Provider value={initialModalState}>
      {children}
    </modalContext.Provider>
  )
}

export default modalContext
