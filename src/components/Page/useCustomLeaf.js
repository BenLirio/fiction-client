import React from 'react'

const useCustomLeaf = () => {
  return props => {
    const { color = 'inherit' } = props.leaf
    return (
      <span style={{ color: color }} {...props.attributes}>
        {props.children}
      </span>
    )
  }
}

export default useCustomLeaf
