import React, { useEffect, useContext } from 'react'
import Layout from './Layout/Layout'
import Story from './views/Story'
import Storys from './views/Storys'
import { Route, Switch } from 'react-router-dom'
import NotFound from './views/NotFound'
import Modals from './Modal/Modals'
import { signIn } from './api/auth'
import userContext from './user-context'

const App = () => {
  const { setToken } = useContext(userContext)
  useEffect(() => {
    signIn({ email: 'test@test', password: 'test' }).then(res =>
      setToken(res.data.user.token)
    )
  }, [])
  return (
    <Layout>
      <Modals />
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
      </Switch>
    </Layout>
  )
}

export default App
