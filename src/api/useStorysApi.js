import useAjax from './useAjax'
import { useCallback, useReducer, useContext } from 'react'
import storysContext from '../storys-context'
import { useHistory, useParams } from 'react-router-dom'

const url = 'storys'

const useServerApi = () => {
  const history = useHistory()
  const { dispatch } = useContext(storysContext)
  const { id } = useParams()
  const ajax = useAjax()

  const index = useCallback(async () => {
    let res
    try {
      res = await ajax({ url })
      dispatch({ type: 'received', payload: res.data.storys })
    } catch (error) {
      dispatch({ type: 'error' })
    }
  })
  const create = useCallback(async () => {
    let res
    try {
      res = await ajax({
        url,
        method: 'POST',
        data: { story: { title: 'untitled', text: 'Write here...' } }
      })
      dispatch({ type: 'received', payload: [res.data.story] })
      history.push('/stories/' + res.data.story._id)
    } catch (error) {
      dispatch({ type: 'error' })
    }
  })
  const update = useCallback(async ({ title, text }) => {
    try {
      await ajax({
        url: `${url}/${id}`,
        method: 'PATCH',
        data: { story: { title, text } }
      })
      dispatch({ type: 'edit', payload: { title, text } })
    } catch (error) {
      dispatch({ type: 'error' })
    }
  })
  return {
    index,
    create,
    update
  }
}
export default useServerApi
