import { useContext } from 'react'
import modalContext from '../context/modal-context'
import { signIn, signUp, signOut } from '../api/auth'
import userContext from '../context/user-context'
import { useHistory } from 'react-router-dom'

const useAuth = () => {
  const { setLoading, close, setError } = useContext(modalContext)
  const { token, setToken } = useContext(userContext)
  const history = useHistory()
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
          localStorage.setItem('token', JSON.stringify(data.user.token))
          close()
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
    },
    signOut: () => {
      setLoading(true)
      setError(false)
      signOut(token)
        .then(() => {
          setToken('')
          setLoading(false)
          localStorage.removeItem('token')
          history.push('/')
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
    }
  }
}

export default useAuth
