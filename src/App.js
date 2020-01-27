import React, { useEffect, useContext } from 'react'
import Layout from './Layout/Layout'
import Story from './views/Story'
import Storys from './views/Storys'
import { signIn } from './api/auth'
import userContext from './user-context'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './views/NotFound'

const App = () => {
  const { setToken } = useContext(userContext)
  useEffect(() => {
    signIn({ email: 'test@gmail.com', password: 'test' })
      .then(({ data: { user: { token } } }) => setToken(token))
      .then(() => {
        console.log('============= signed in =============')
      })
  }, [setToken])
  return (
    <Layout>
      <Switch>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route exact path="/stories">
          <Storys />
        </Route>
        <Route path="/stories/:id">
          <Story />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Layout>
  )
}

export default App
