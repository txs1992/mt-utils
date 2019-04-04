const scrollList = ['auto', 'scroll']

export default function(el, direction = 'vertical') {
  const style = window.getComputedStyle(el)
  if (direction === 'vertical') {
    return scrollList.includes(style.overflowY)
  } else if (direction === 'horizontal') {
    return scrollList.includes(style.overflowX)
  }
}
