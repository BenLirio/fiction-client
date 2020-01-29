export default (state, action) => {
  switch (action.type) {
    case 'send':
      return { loading: true, error: false }
    case 'receive':
      return { loading: false, error: false }
    case 'error':
      return { loading: false, error: true }
    default:
      throw new Error()
  }
}
