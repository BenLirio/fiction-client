import React from 'react'

const useCustomLeaf = () => {
  return props => {
    const { color = 'inherit' } = props.leaf
    console.log('color', color)
    return (
      <span style={{ color: color }} {...props.attributes}>
        {props.children}
      </span>
    )
  }
}

export default useCustomLeaf
