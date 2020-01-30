// This function is read only
// If you want to write to the state please refer to
// use story api.js
const storysReducer = (state, action) => {
  const { payload } = action
  let id
  switch (action.type) {
    // Index takes in an array and sets all state to the array
    // first mapping over the items and only getting data and id
    // When indexing all sort by date
    case 'index': {
      console.log(payload[0].updatedAt)
      return payload
        .map(i => ({
          id: i._id,
          text: JSON.parse(i.text),
          updatedAt: i.updatedAt
        }))
        .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
    }
    case 'show': {
      id = payload._id
      const rest = state.filter(i => i.id !== id)
      const found = state.find(i => i.id === id) || {}
      found.text = JSON.parse(payload.text)
      found.id = payload._id
      return [...rest, found].sort(
        (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
      )
    }
    // create takes maps the object and adds it at the end of the array
    case 'create': {
      const created = {
        id: payload._id,
        text: JSON.parse(payload.text),
        updatedAt: payload.updatedAt
      }
      return [...state, created].sort(
        (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
      )
    }
    // Update takes in an id and data
    case 'update': {
      id = payload._id
      const rest = state.filter(i => i.id !== id)
      const found = state.find(i => i.id === id)
      found.text = JSON.parse(payload.text)
      return [...rest, found]
    }
    case 'destroy': {
      id = payload
      return state.filter(i => i.id !== id)
    }
    default: {
      throw new Error()
    }
  }
}

export default storysReducer
