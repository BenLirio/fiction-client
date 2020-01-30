import React, { useState } from 'react'

const initialDrawerState = {
  open: null,
  openDrawer: () => {},
  closeDrawer: () => {}
}

const DrawerContext = React.createContext(initialDrawerState)

export const DrawerContextProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const openDrawer = () => {
    setDrawerOpen(true)
  }
  const closeDrawer = () => {
    setDrawerOpen(false)
  }
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
