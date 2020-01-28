import React, { useMemo, useState, useContext, useEffect } from 'react'
import { makeStyles, TextField } from '@material-ui/core'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import useStoryApi from '../../api/useStorysApi'
import currentStoryContext from '../../current-story-context'

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
  const editor = useMemo(() => withReact(createEditor()), [])
  const story = useContext(currentStoryContext)
  const { update } = useStoryApi()
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: story.text }]
    }
  ])

  useEffect(() => {
    let updateTimer = setTimeout(() => {
      const newValue = value[0].children[0].text
      update({ title: story.title, text: newValue })
    }, 2000)
    return () => {
      clearTimeout(updateTimer)
    }
  }, [value])
  return (
    <>
      <TextField
        value={story && story.title}
        placeholder={story && story.title}
      ></TextField>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Editable />
      </Slate>
    </>
  )
}

export default Page
