import isObject from './is-object.js'

export default function(obj, first) {
  if (!isObject(obj)) return ''

  const result = Object.keys(obj)
    .map(key => {
      let value = obj[key]
      if (isObject(value)) value = JSON.stringify(value)
      return `${key}=${encodeURIComponent(value)}`
    })
    .join('&')

  return first ? `&${result}` : result
}
