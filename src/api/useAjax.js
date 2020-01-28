import { useContext, useCallback } from 'react'
import userContext from '../user-context'
import apiUrl from '../apiConfig'
import Axios from 'axios'

const useAjax = () => {
  const { token } = useContext(userContext)
  return useCallback(
    ({ url = '', method = 'GET' }) => {
      console.log('object')
      return Axios({
        url: `${apiUrl}/${url}`,
        method,
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
    },
    [token]
  )
}

export default useAjax
