export default (state, action) => {
  switch (action.type) {
    case 'send':
      console.log('send')
      return { loading: true, error: false }
    case 'receive':
      console.log('receive')
      return { loading: false, error: false }
    case 'error':
      console.log('error')
      return { loading: false, error: true }
    default:
      throw new Error()
  }
}
