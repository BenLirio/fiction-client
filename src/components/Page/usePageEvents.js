const usePageEvents = () => {
  const onEvents = (event, editor) => {
    if (event.key === '7' && event.ctrlKey) {
    }
    return null
  }
  return onEvents
}

export default usePageEvents
