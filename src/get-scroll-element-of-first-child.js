import isScrollElement from './is-scroll-element.js'

export default function(el, direction = 'vertical') {
  if (!el || !el.childNodes) return null
  let nodes = [].slice.apply(el.childNodes)
  while (nodes.length) {
    const node = nodes.shift()

    if (node.nodeType !== 1) continue

    if (isScrollElement(node, direction)) {
      return node
    } else {
      if (node.childNodes.length) {
        nodes = nodes.concat([].slice.apply(node.childNodes))
      }
    }

    return null
  }
}
