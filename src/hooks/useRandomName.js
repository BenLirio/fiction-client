const generate = require('project-name-generator')

const useRandomNameGenerator = () => {
  const generator = () => {
    return JSON.stringify([
      {
        type: 'h4',
        children: [{ text: generate().spaced }]
      },
      {
        type: 'body1',
        children: [{ text: 'Write your fantastic story here...' }]
      }
    ])
  }
  return generator
}
export default useRandomNameGenerator
