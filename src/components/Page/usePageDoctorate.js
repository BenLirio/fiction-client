import React, { useCallback } from 'react'
import { Text } from 'slate'

const usePageDoctorate = () => {
  const searches = [
    ['the', '#faa'],
    ['eht', '#afa'],
    ['the', '#faa'],
    ['eht', '#afa'],
    ['the', '#faa'],
    ['eht', '#afa'],
    ['the', '#faa'],
    ['eht', '#afa'],
    ['the', '#faa'],
    ['eht', '#afa'],
    ['the', '#faa'],
    ['eht', '#afa'],
    ['the', '#faa'],
    ['eht', '#afa']
  ]
  const decorate = useCallback(
    ([node, path]) => {
      const ranges = []
      searches.forEach(search => {
        if (search[0] && Text.isText(node)) {
          const { text } = node
          const parts = text.split(search[0])
          let offset = 0

          parts.forEach((part, i) => {
            if (i !== 0) {
              ranges.push({
                anchor: { path, offset: offset - search[0].length },
                focus: { path, offset },
                color: search[1]
              })
            }

            offset = offset + part.length + search[0].length
          })
        }
      })

      return ranges
    },
    [searches]
  )
  return decorate
}

export default usePageDoctorate

// onKeyDown={e => {
//   if (e.key === '&') {
//     e.preventDefault()
//     Transforms.setNodes(
//       editor,
//       { color: '#7a7' },
//       // Apply it to text nodes, and split the text node up if the
//       // selection is overlapping only part of it.
//       { match: n => Text.isText(n), split: true }
//     )
//   }
// }}
