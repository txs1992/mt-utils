import isObject from './is-object.js'

export default function(obj, first = false, transcoding = true) {
  if (!isObject(obj)) return ''

  const result = Object.keys(obj)
    .map(key => {
      let value = obj[key]
      if (isObject(value)) value = JSON.stringify(value)
      return `${key}=${transcoding ? encodeURIComponent(value) : value}`
    })
    .join('&')

  return first ? `&${result}` : result
}
