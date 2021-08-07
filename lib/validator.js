'use strict'

export default function ThaiNationalID (id) {
  if (!/^[0-9]{13}$/g.test(id)) {
    return false
  }
  let i; let sum = 0
  for ((i = 0), (sum = 0); i < 12; i++) {
    sum += parseInt(id.charAt(i)) * (13 - i)
  }
  const check = (11 - sum % 11) % 10
  if (check === parseInt(id.charAt(12))) {
    return true
  }
  return false
}

module.exports = exports.default
