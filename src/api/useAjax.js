import { useContext, useCallback } from 'react'
import userContext from '../user-context'
import apiUrl from '../apiConfig'
import Axios from 'axios'

const useAjax = () => {
  const { token } = useContext(userContext)
  return useCallback(
    ({ url = '', method = 'GET', data = {} }) => {
      return Axios({
        url: `${apiUrl}/${url}`,
        method,
        headers: {
          Authorization: 'Bearer ' + token
        },
        data
      })
    },
    [token]
  )
}

export default useAjax
