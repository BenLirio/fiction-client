import { useCallback, useEffect, useContext } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import userContext from '../user-context'
const useServerApi = () => {
  const { token } = useContext(userContext)
  console.log('token', token)
  const ajax = useCallback(
    ({ url = '', method = 'GET' }) => {
      console.log('object')
      return axios({
        url: `${apiUrl}/${url}`,
        method,
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
    },
    [token]
  )
  return {
    storysApi: {
      index: () => ajax({ url: 'storys' }),
      show: id => ajax({ url: `storys/${id}` })
    }
  }
}
export default useServerApi
