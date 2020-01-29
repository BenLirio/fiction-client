import React, { useState, useCallback } from 'react'

const initialUserState = {
  token: null,
  setToken: () => {}
}

const userContext = React.createContext(initialUserState)

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('token')) || null
  )

  const setTokenCallback = useCallback(pToken => {
    setToken(pToken)
  }, [])
  const userState = {
    token,
    setToken: setTokenCallback
  }

  return (
    <userContext.Provider value={userState}>{children}</userContext.Provider>
  )
}

export default userContext
