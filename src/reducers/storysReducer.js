const reducer = (state, action) => {
  switch (action.type) {
    case 'index':
      return action.payload.map(i => ({ id: i._id, data: i.data }))
    case 'show':
      return null
    case 'create':
      const payload = action.payload
      const created = {
        id: payload._id,
        data: payload.data
      }
      return [...state, created]
    case 'update':
      const id = action.id
      const payload = action
      const rest = state.filter(i => i.id !== id)
      const found = state.find(i => i.id === id)
      found.data = action.payload
      return [...rest, found]
    case 'destroy':
      const id = action.id
      return state.filter(i => i.id !== id)
    default:
      throw new Error()
  }
}

export default storysReducer
