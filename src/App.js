import React from 'react'
import Layout from './Layout/Layout'
import Story from './views/Story'
import Storys from './views/Storys'
import { Route, Switch } from 'react-router-dom'
import NotFound from './views/NotFound'
import Modals from './components/Modal/Modals'
import { CurrentStoryContextProvider } from './context/current-story-context'

const App = () => {
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
          <CurrentStoryContextProvider>
            <Story />
          </CurrentStoryContextProvider>
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
