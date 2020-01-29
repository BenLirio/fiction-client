import useAjax from './useAjax'
import { useCallback, useContext } from 'react'
import storysContext from '../context/storys-context'

const url = 'storys'

const useServerApi = () => {
  // Allow server api to dispatch to the context
  const { dispatch } = useContext(storysContext)
  // Requests should use the ajax format
  const ajax = useAjax()

  // INDEX
  const index = useCallback(async () => {
    let res
    try {
      res = await ajax({ url })
      // Successfully indexed, set the storys state
      dispatch({ type: 'received', payload: res.data.storys })
    } catch (error) {
      // Failed to index
      dispatch({ type: 'error' })
    }
  }, [ajax, dispatch])

  // SHOW
  const show = useCallback(
    async id => {
      let res
      try {
        res = await ajax({ url: `${url}/${id}` })
        // Successfully found story, add it to state
        dispatch({ type: 'received', payload: res.data.storys })
      } catch (error) {
        // Failed to show
        dispatch({ type: 'error' })
      }
    },
    [ajax, dispatch]
  )

  // CREATE
  const create = useCallback(
    async data => {
      let res
      try {
        res = await ajax({
          url,
          method: 'POST',
          data
        })
        // Created story
        dispatch({ type: 'received', payload: [res.data.story] })
      } catch (error) {
        // Failed to create story
        dispatch({ type: 'error' })
      }
    },
    [ajax, dispatch]
  )

  // PATCH
  const update = useCallback(
    async ({ data, id }) => {
      let res
      try {
        res = await ajax({
          url: `${url}/${id}`,
          method: 'PATCH',
          data
        })
        // Updated a story
        const {
          data: { story }
        } = res
        dispatch({
          type: 'edit',
          payload: [story],
          id: story._id
        })
      } catch (error) {
        // Failed to update story
        dispatch({ type: 'error' })
      }
    },
    [ajax, dispatch]
  )

  // DELETE
  const destroy = useCallback(
    async id => {
      try {
        await ajax({
          url: `${url}/${id}`,
          method: 'DELETE'
        })
        // Successfully Deleted a story
        dispatch({ type: 'destroy', id })
      } catch (error) {
        // Failed to delete a story
        dispatch({ type: 'error' })
      }
    },
    [ajax, dispatch]
  )
  return {
    index,
    show,
    create,
    update,
    destroy
  }
}
export default useServerApi
