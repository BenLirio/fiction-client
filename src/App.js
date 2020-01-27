import React, { useEffect, useContext } from 'react'
import Layout from './Layout/Layout'
import Main from './views/Main'
import { signIn } from './hooks/auth'
import userContext from './user-context'

const App = () => {
  const { setToken } = useContext(userContext)
  useEffect(() => {
    signIn({ email: 'test@gmail.com', password: 'test' })
      .then(({ data: { user: { token } } }) => setToken(token))
      .then(() => {
        console.log('============= signed in =============')
      })
  }, [])
  return (
    <Layout>
      <Main />
    </Layout>
  )
}

export default App
