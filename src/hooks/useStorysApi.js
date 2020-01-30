import useAjax from './useAjax'
import { useCallback, useContext, useState } from 'react'
import { storysContextDispatchProvider } from '../context/storys-context'

const url = 'storys'

const useStorysApi = () => {
  // Let user have access to the status
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  // Allow server api to dispatch to the context
  const dispatch = useContext(storysContextDispatchProvider)
  // Requests should use the ajax format
  const ajax = useAjax()

  // INDEX
  const index = useCallback(async () => {
    setError(false)
    setLoading(true)
    let res
    try {
      res = await ajax({ url })
      // Successfully indexed, set the storys state
      dispatch({ type: 'index', payload: res.data.storys })
    } catch (error) {
      // Failed to index
      setError(true)
    }
    setLoading(false)
  }, [ajax, dispatch])

  // SHOW
  const show = useCallback(
    async id => {
      setError(false)
      setLoading(true)
      let res
      try {
        res = await ajax({ url: `${url}/${id}` })
        // Successfully found story, add it to state
        dispatch({ type: 'show', payload: res.data.story })
      } catch (error) {
        // Failed to show
        setError(true)
      }
      setLoading(false)
    },
    [ajax, dispatch]
  )

  // CREATE
  const create = useCallback(
    async data => {
      setError(false)
      setLoading(true)
      let res
      try {
        res = await ajax({
          url,
          method: 'POST',
          data: {
            story: {
              text: data
            }
          }
        })
        // Created story
        dispatch({ type: 'create', payload: res.data.story })
      } catch (error) {
        // Failed to create story
        setError(true)
      }
      setLoading(false)
    },
    [ajax, dispatch]
  )

  // PATCH
  const update = useCallback(
    async (id, data) => {
      setError(false)
      setLoading(true)
      let res
      try {
        res = await ajax({
          url: `${url}/${id}`,
          method: 'PATCH',
          data: {
            story: {
              text: data
            }
          }
        })
        // Updated a story
      } catch (error) {
        // Failed to update story
        setError(true)
      }
      setLoading(false)
    },
    [ajax, dispatch]
  )

  // DELETE
  const destroy = useCallback(
    async id => {
      setError(false)
      setLoading(true)
      try {
        await ajax({
          url: `${url}/${id}`,
          method: 'DELETE'
        })
        // Successfully Deleted a story
        dispatch({ type: 'destroy', id })
      } catch (error) {
        // Failed to delete a story
        setError(true)
      }
      setLoading(false)
    },
    [ajax, dispatch]
  )
  return {
    index,
    show,
    create,
    update,
    destroy,
    loading,
    error
  }
}
export default useStorysApi
