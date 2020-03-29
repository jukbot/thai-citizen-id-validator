/* eslint-env jest */
const validate = require('../lib/validator')

test('Case 1: Valid ID Correct pattern', () => {
  expect(validate('1112034563562')).toBe(true)
})

test('Case 2: Invalid ID Wrong pattern', () => {
  expect(validate('1101700230705')).toBe(false)
})

test('Case 3: Invalid ID Less than 13 character', () => {
  expect(validate('110170023073')).toBe(false)
})

test('Case 4: Invalid ID Mixed character ', () => {
  expect(validate('11017002070d3')).toBe(false)
})

test('Case 5: Invalid ID Mixed character', () => {
  expect(validate('rytege54fsfsf')).toBe(false)
})

test('Case 6: Invalid ID Just 0', () => {
  expect(validate('0')).toBe(false)
})

test('Case 7: Invalid ID Special character', () => {
  expect(validate('-')).toBe(false)
})

test('Case 8: Invalid ID Blank character', () => {
  expect(validate('')).toBe(false)
})

test('Case 9: Invalid ID NULL', () => {
  expect(validate(null)).toBe(false)
})

test('Case 10: Invalid ID Only text character', () => {
  expect(validate('blablabla')).toBe(false)
})

test('Case 11: Invalid ID Undefined input', () => {
  expect(validate(undefined)).toBe(false)
})
