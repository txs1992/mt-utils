const oneDay = 24 * 3600 * 1000

export default function(date, startDay = 1) {
  const day = date.getDay()
  const offset = 6 - ((day + 7 - startDay) % 7)
  return new Date(date.getTime() + offset * oneDay)
}
