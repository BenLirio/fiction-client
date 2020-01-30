import { Transforms, Node } from 'slate'

const withLayout = editor => {
  const { normalizeNode } = editor

  // From docs. Basically what this does is
  // picks the first line and makes it a h4 tag,
  // Next it picks all the other lines and makes them body text
  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      for (const [child, childPath] of Node.children(editor, path)) {
        const type = childPath[0] === 0 ? 'h4' : 'body1'

        if (child.type !== type) {
          Transforms.setNodes(editor, { type }, { at: childPath })
        }
      }
    }
    return normalizeNode([node, path])
  }

  return editor
}
export default withLayout
