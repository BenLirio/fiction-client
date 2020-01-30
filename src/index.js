import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'

import { ModalContextProvider } from './context/modal-context'
import { UserContextProvider } from './context/user-context'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './theme'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { StorysContextProvider } from './context/storys-context'
console.log(process)
const rootJsx = (
  <UserContextProvider>
    <ModalContextProvider>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <StorysContextProvider>
            <CssBaseline />
            <App />
          </StorysContextProvider>
        </HashRouter>
      </ThemeProvider>
    </ModalContextProvider>
  </UserContextProvider>
)

ReactDOM.render(rootJsx, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
