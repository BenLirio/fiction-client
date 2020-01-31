import React from 'react'
import Axios from 'axios'

const usePageEvents = () => {
  const onEvents = (event, editor) => {
    if (event.key === '7' && event.ctrlKey) {
      console.log('editor')
      const options = {
        context:
          editor.children[editor.selection.anchor.path[0]].children[0].text,
        model_size: 'gpt2/xl',
        top_p: 0.9,
        temperature: 1,
        max_time: 5
      }
      Axios.post(
        'https://transformer.huggingface.co/autocomplete/gpt2/medium',
        options
      ).then(res => editor.insertText(res.data.sentences[0].value))
    }
    return null
  }
  return onEvents
}

export default usePageEvents
