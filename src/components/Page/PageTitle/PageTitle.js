import React, {
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect
} from 'react'
import currentStoryContext from '../../../current-story-context'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import useStorysApi from '../../../api/useStorysApi'

const PageTitle = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const { title } = useContext(currentStoryContext)
  const { update } = useStorysApi()
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [
        {
          text: title
        }
      ]
    }
  ])
  const Title = useCallback(
    props => <h1 {...props.attributes}>{props.children}</h1>,
    []
  )
  useEffect(() => {
    let updateTimer = setTimeout(() => {
      const newValue = value[0].children[0].text
      update({ title: newValue })
    }, 2000)
    return () => {
      clearTimeout(updateTimer)
    }
  }, [value, update])
  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable renderElement={Title} />
    </Slate>
  )
}

export default PageTitle
