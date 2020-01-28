import React, { useContext } from 'react'
import modalContext from '../Modal/modal-context'
import { signIn, signUp } from '../api/auth'
import userContext from '../user-context'

const useAuth = () => {
  const { setLoading, close, setError } = useContext(modalContext)
  const { token, setToken } = useContext(userContext)
  return {
    signUp: credentials => {
      setLoading(true)
      setError(false)
      signUp(credentials)
        .then(() => {
          setLoading(false)
          close()
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
    },
    signIn: credentials => {
      setLoading(true)
      setError(false)
      signIn(credentials)
        .then(({ data }) => {
          setToken(data.user.token)
          setLoading(false)
          close()
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
    }
  }
}

export default useAuth
