import { useState, useCallback } from 'react'

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  const bind = {
    value,
    onChange: e => setValue(e.target.value)
  }
  const reset = useCallback(() => setValue(''), [setValue])
  return [value, bind, reset]
}
export default useInput
