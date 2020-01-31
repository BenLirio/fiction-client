import React, { useMemo, useEffect } from 'react'
import { makeStyles, Fade } from '@material-ui/core'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import usePageState from './usePageState'
import useCustomElements from './useCustomElements'
import useCustomLeaf from './useCustomLeaf'
import usePageDoctorate from './usePageDoctorate'
import usePageEvents from './usePageEvents'
import withLayout from './withLayout'

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    margin: '20px auto 0',
    padding: 20
  }
}))

const Page = () => {
  const classes = useStyles()
  const editor = useMemo(() => withReact(withLayout(createEditor())), [])
  const [value, setValue] = usePageState()
  const renderElement = useCustomElements()
  const renderLeaf = useCustomLeaf()
  const decorate = usePageDoctorate()
  const onEvents = usePageEvents()
  useEffect(() => {}, [])
  return (
    <Fade in={true} direction="up">
      <div className={classes.root}>
        <div>
          <Slate editor={editor} value={value} onChange={setValue}>
            <Editable
              placeholder={'Title...'}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              decorate={decorate}
              onKeyDown={event => onEvents(event, editor)}
            />
          </Slate>
        </div>
      </div>
    </Fade>
  )
}

export default Page
