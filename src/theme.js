import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React, { useState, useEffect } from 'react'

const defaultTheme = {
  drawerWidth: 280
}

const ThemeEditor = React.createContext(defaultTheme)

export const ThemeEditorProvider = ({ children }) => {
  const [pojoTheme, setPojoTheme] = useState(defaultTheme)
  const [theme, setTheme] = useState(createMuiTheme(pojoTheme))

  useEffect(() => {
    setTheme(createMuiTheme(pojoTheme))
  }, [pojoTheme])

  return (
    <ThemeProvider theme={theme}>
      <ThemeEditor.Provider value={setPojoTheme}>
        {children}
      </ThemeEditor.Provider>
    </ThemeProvider>
  )
}

export default ThemeEditor
