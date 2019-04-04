export default (function() {
  const element = document.createElement('div')
  const vendors = 'Khtml O Moz Ms Webkit'.split(' ')
  const vendorLen = vendors.length

  return function(prop, value) {
    if (prop in element.style) {
      if (value) {
        element.style[prop] = value
        return element.style[prop] === value
      } else {
        return true
      }
    }

    let len = vendorLen

    // 前缀转换处理
    prop = prop.replace(/^[a-z]/, function(value) {
      return value.toUpperCase()
    })

    while (len--) {
      const prefix = vendors[len]
      if (prefix + prop in element.style) {
        // 如果传入了属性值，就对属性值校验，否则只校验是否存在该属性。
        if (value) {
          element.style[prefix + prop] = value
          return element.style[prefix + prop] === value
        } else {
          return true
        }
      }
    }

    return false
  }
})()
