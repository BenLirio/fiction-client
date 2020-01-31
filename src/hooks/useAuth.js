import { useContext } from 'react'
import modalContext from '../context/modal-context'
import { signIn, signUp, signOut, changePassword } from '../api/auth'
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
      const temp = token
      setToken('')
      history.push('/')
      signOut(token)
        .then(() => {
          setLoading(false)
          localStorage.removeItem('token')
        })
        .catch(() => {
          setToken(temp)
          setLoading(false)
          setError(true)
        })
    },
    changePassword: passwords => {
      setLoading(true)
      setError(false)
      changePassword(token, passwords)
        .then(() => {
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
    }
  }
}

export default useAuth
