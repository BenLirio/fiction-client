const storysReducer = (state, action) => {
  switch (action.type) {
    case 'received':
      return [...state, ...action.payload]
    case 'error':
      return state
    default:
      throw new Error()
  }
}

export default storysReducer
