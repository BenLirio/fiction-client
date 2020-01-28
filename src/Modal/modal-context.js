import React, { useState } from 'react'

const initialModalState = {
  current: '',
  loading: false,
  close: () => {}
}

const modalContext = React.createContext(initialModalState)

export const ModalContextProvider = ({ children }) => {
  const [current, setCurrent] = useState('none')
  const [loading, setLoading] = useState(false)
  const modalState = {
    current,
    loading,
    setLoading,
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
