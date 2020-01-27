import React, { useState } from 'react'

const initialUserState = {
  token: null,
  setToken: () => {}
}

const userContext = React.createContext(initialUserState)

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const userState = {
    token,
    setToken: pToken => {
      setToken(pToken)
    }
  }

  return (
    <userContext.Provider value={userState}>{children}</userContext.Provider>
  )
}

export default userContext
