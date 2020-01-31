import React, { useState, useContext, useEffect } from 'react'
import userContext from './user-context'

const initialDrawerState = {
  open: null,
  openDrawer: () => {},
  closeDrawer: () => {}
}

const DrawerContext = React.createContext(initialDrawerState)

export const DrawerContextProvider = ({ children }) => {
  const { token } = useContext(userContext)
  const [drawerOpen, setDrawerOpen] = useState(token && true)
  const openDrawer = () => {
    setDrawerOpen(token && true)
  }
  const closeDrawer = () => {
    setDrawerOpen(false)
  }
  useEffect(() => {
    setDrawerOpen(token && true)
  }, [token])
  return (
    <DrawerContext.Provider
      value={{
        drawerOpen,
        openDrawer,
        closeDrawer
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

export default DrawerContext
