import React, { useState } from 'react'
const SavedContext = React.createContext(false)

export const SavedContextProvider = ({ children }) => {
  const [saved, setSaved] = useState(true)
  return (
    <SavedContext.Provider value={{ saved, setSaved }}>
      {children}
    </SavedContext.Provider>
  )
}

export default SavedContext
