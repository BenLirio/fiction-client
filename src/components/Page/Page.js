import React, { useMemo, useState, useContext, useEffect } from 'react'
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
  return (
    <div className={classes.root}>
      <div>
        <Slate editor={editor} value={value} onChange={setValue}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
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
