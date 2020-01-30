import React, {
  useMemo,
  useState,
  useContext,
  useEffect,
  useCallback
} from 'react'
import { makeStyles } from '@material-ui/core'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor, Transforms, Text } from 'slate'
import currentStoryContext from '../../context/current-story-context'
import usePageState from './usePageState'
import useCustomElements from './useCustomElements'
import useCustomLeaf from './useCustomLeaf'

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    height: 400,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    margin: '20px auto 0',
    padding: 20
  }
}))

const Page = () => {
  const classes = useStyles()
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = usePageState()
  const renderElement = useCustomElements()
  const renderLeaf = useCustomLeaf()
  const [verbs, setVerbs] = useState(['go', 'run'])

  const search = 'the'
  const decorate = useCallback(
    ([node, path]) => {
      const ranges = []

      if (search && Text.isText(node)) {
        const { text } = node
        const parts = text.split(search)
        let offset = 0

        parts.forEach((part, i) => {
          if (i !== 0) {
            ranges.push({
              anchor: { path, offset: offset - search.length },
              focus: { path, offset },
              color: '#921'
            })
          }

          offset = offset + part.length + search.length
        })
      }

      return ranges
    },
    [search]
  )

  return (
    <div className={classes.root}>
      <div>
        <Slate editor={editor} value={value} onChange={setValue}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            decorate={decorate}
            onKeyDown={e => {
              if (e.key === '&') {
                e.preventDefault()
                Transforms.setNodes(
                  editor,
                  { color: '#7a7' },
                  // Apply it to text nodes, and split the text node up if the
                  // selection is overlapping only part of it.
                  { match: n => Text.isText(n), split: true }
                )
              }
            }}
          />
        </Slate>
      </div>
    </div>
  )
}

export default Page
