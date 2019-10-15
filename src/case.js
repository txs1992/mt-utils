export function camelToKebab(str) {
  return str
    .replace(/([A-Z])/g, $1 => `-${$1.toLocaleLowerCase()}`)
    .replace(/^-/, '')
}

export function kebabToCamel(str) {
  return str.replace(/(^\w)|(-(\w){1})/g, ($1, _, __, $4) =>
    ($4 ? $4 : $1).toLocaleUpperCase()
  )
}
