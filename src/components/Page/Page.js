import React, { useMemo, useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import useStoryApi from '../../api/useStorysApi'
import currentStoryContext from '../../current-story-context'
import PageTitle from './PageTitle/PageTitle'

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    height: 400,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    margin: '20px auto 0',
    padding: 20
  },
  title: {
    textAlign: 'center'
  }
}))

const Page = () => {
  const classes = useStyles()
  const editor = useMemo(() => withReact(createEditor()), [])
  const { text } = useContext(currentStoryContext)
  const { update } = useStoryApi()
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: text }]
    }
  ])

  useEffect(() => {
    let updateTimer = setTimeout(() => {
      const newValue = value[0].children[0].text
      update({ text: newValue })
    }, 2000)
    return () => {
      clearTimeout(updateTimer)
    }
  }, [value, update])
  return (
    <div className={classes.root}>
      <PageTitle />
      <div>
        <Slate
          editor={editor}
          value={value}
          onChange={value => setValue(value)}
        >
          <Editable />
        </Slate>
      </div>
    </div>
  )
}

export default Page
