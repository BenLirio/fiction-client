import React, { useContext, useState, useEffect } from 'react'
import Layout from './Layout/Layout'
import Story from './views/Story'
import Storys from './views/Storys'
import { Route, Switch } from 'react-router-dom'
import NotFound from './views/NotFound'
import Modals from './components/Modal/Modals'
import { CurrentStoryContextProvider } from './context/current-story-context'
import Profile from './views/Profile'
import Settings from './views/Settings'
import userContext from './context/user-context'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  absolute: {
    position: 'absolute',
    zIndex: 9999999,
    bottom: 40,
    left: '50%'
  }
}))

const App = () => {
  const classes = useStyles()
  const { token } = useContext(userContext)
  const [success, setSuccess] = useState(false)
  if (success) {
    setTimeout(() => {
      setSuccess(false)
    }, 2000)
  }
  useEffect(() => {
    setSuccess(token ? true : false)
  }, [token])
  return (
    <Layout>
      <div className={classes.absolute}>
        {success && <Alert severity="success">Success</Alert>}
      </div>
      <Modals />
      <Switch>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route exact path="/stories">
          <Storys />
        </Route>
        <Route path="/stories/:id">
          <CurrentStoryContextProvider>
            <Story />
          </CurrentStoryContextProvider>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
