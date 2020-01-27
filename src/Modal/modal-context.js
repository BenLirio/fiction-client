import React, { useState } from 'react'

const initialModalState = {
  current: '',
  close: () => {}
}

const modalContext = React.createContext(initialModalState)

export const ModalContextProvider = ({ children }) => {
  const [current, setCurrent] = useState('none')
  const modalState = {
    current,
    close: () => {
      setCurrent('none')
    },
    open: modal => {
      setCurrent(modal)
    }
  }

  return (
    <modalContext.Provider value={modalState}>{children}</modalContext.Provider>
  )
}

export default modalContext
