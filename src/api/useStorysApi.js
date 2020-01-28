import useAjax from './useAjax'
import { useCallback, useReducer } from 'react'
import storyReducer from '../reducers/storyReducer'
const useServerApi = () => {
  const dispatch = useReducer(storyReducer)[1]
  const ajax = useAjax()
  return {
    index: useCallback(() => ajax({ url: 'storys' })),
    create: useCallback(() => ajax({ url: 'storys' })),
    show: useCallback(id => ajax({ url: `storys/${id}` }))
  }
}
export default useServerApi
