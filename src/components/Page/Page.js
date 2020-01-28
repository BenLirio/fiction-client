import React, { useMemo, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'

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
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'test' }]
    }
  ])
  const renderText = props => {
    return <h3 {...props.attribute}>{props.children}</h3>
  }
  return (
    <div className={classes.root}>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Editable renderElement={renderText} />
      </Slate>
    </div>
  )
}

export default Page
