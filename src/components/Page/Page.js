import React, { useMemo, useEffect } from 'react'
import { makeStyles, Fade, Slide } from '@material-ui/core'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import usePageState from './usePageState'
import useCustomElements from './useCustomElements'
import useCustomLeaf from './useCustomLeaf'
import usePageDoctorate from './usePageDoctorate'
import usePageEvents from './usePageEvents'
import withLayout from './withLayout'
import useAjax from '../../hooks/useAjax'
import Axios from 'axios'

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
  const ajax = useAjax()
  useEffect(() => {
    const url = 'https://transformer.huggingface.co/autocomplete/gpt2/medium'
    const options = {
      context: 'context',
      model_size: 'gpt2/xl',
      top_p: 0.9,
      temperature: 1,
      max_time: 5
    }
    // Axios.post(
    //   'https://transformer.huggingface.co/autocomplete/gpt2/medium',
    //   options
    // ).then(console.log)
  }, [])
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
