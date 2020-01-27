import React, { useEffect, useContext } from 'react'
import Layout from './Layout/Layout'
import Story from './views/Story'
import { signIn } from './api/auth'
import userContext from './user-context'

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
      <Story />
    </Layout>
  )
}

export default App
