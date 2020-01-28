const storyReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [1]
    default:
      throw new Error()
  }
}

export default storyReducer
