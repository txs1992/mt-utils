import isScrollElement from './is-scroll-element.js'

export default function getScrollElement(el, direction = 'vertical') {
  if (!el || !el.parentElement) {
    console.log(el, el.parentElement)
    return null
  }
  if (isScrollElement(el.parentElement, direction)) {
    return el.parentElement
  } else {
    return getScrollElement(el.parentElement, direction)
  }
}
