import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'

import { ModalContextProvider } from './context/modal-context'
import { UserContextProvider } from './context/user-context'
import { CssBaseline } from '@material-ui/core'
import { ThemeEditorProvider } from './theme'
import { HashRouter } from 'react-router-dom'
import { StorysContextProvider } from './context/storys-context'
import { DrawerContextProvider } from './context/drawer-context'
import { SavedContextProvider } from './context/saving-data'
const rootJsx = (
  <UserContextProvider>
    <ModalContextProvider>
      <ThemeEditorProvider>
        <HashRouter>
          <StorysContextProvider>
            <DrawerContextProvider>
              <SavedContextProvider>
                <CssBaseline />
                <App />
              </SavedContextProvider>
            </DrawerContextProvider>
          </StorysContextProvider>
        </HashRouter>
      </ThemeEditorProvider>
    </ModalContextProvider>
  </UserContextProvider>
)

ReactDOM.render(rootJsx, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
