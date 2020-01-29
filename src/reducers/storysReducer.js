// This function is read only
// If you want to write to the state please refer to
// use story api.js
const storysReducer = (state, action) => {
  const { payload } = action
  let id
  switch (action.type) {
    // Index takes in an array and sets all state to the array
    // first mapping over the items and only getting data and id
    case 'index':
      console.log('action', action)
      return payload.map(i => ({ id: i._id, data: i.data }))
    // create takes maps the object and adds it at the end of the array
    case 'create':
      const created = {
        id: payload._id,
        data: payload.data
      }
      return [...state, created]
    // Update takes in an id and data
    case 'update':
      id = payload._id
      const rest = state.filter(i => i.id !== id)
      const found = state.find(i => i.id === id)
      found.data = payload.data
      return [...rest, found]
    case 'destroy':
      id = payload._id
      return state.filter(i => i.id !== id)
    default:
      console.error(action)
      throw new Error()
  }
}

export default storysReducer
