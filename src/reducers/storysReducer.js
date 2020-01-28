const storysReducer = (state, action) => {
  switch (action.type) {
    case 'edit':
      console.log('action', action)
      return (
        state &&
        state.map(story => {
          if (story._id === action.id) {
            story.text = action.text
          }
          return story
        })
      )
    case 'received':
      return [
        ...state.filter(s => !action.payload.map(s => s._id).includes(s._id)),
        ...action.payload
      ]
    case 'error':
      return state
    default:
      throw new Error()
  }
}

export default storysReducer
