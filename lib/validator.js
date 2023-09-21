'use strict'

function ThaiNationalID (id) {
  if (!/^[0-9]{13}$/g.test(id)) {
    return false
  }
  let i; let sum = 0
  for ((i = 0), (sum = 0); i < 12; i++) {
    sum += Number.parseInt(id.charAt(i)) * (13 - i)
  }
  const checkSum = (11 - sum % 11) % 10
  if (checkSum === Number.parseInt(id.charAt(12))) {
    return true
  }
  return false
}

if (typeof window !== 'undefined') {
  export default ThaiNationalID
} else {
  module.exports = exports.default = ThaiNationalID
}
