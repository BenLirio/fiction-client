import React from 'react'
import { Typography } from '@material-ui/core'

const useCustomElements = () => {
  return props => {
    return <Typography variant={props.element.type} {...props} />
  }
}

export default useCustomElements
