import { describe, it, expect } from 'bun:test'
import validateThaiID from '../lib/validator'

describe('validateThaiID Function', () => {
  it('Case 1: Valid ID Correct pattern', () => {
    expect(validateThaiID('1112034563562')).toBe(true)
  })

  it('Case 2: Invalid ID Wrong pattern', () => {
    expect(validateThaiID('1101700230705')).toBe(false)
  })

  it('Case 3: Invalid ID Less than 13 characters', () => {
    expect(validateThaiID('110170023073')).toBe(false)
  })

  it('Case 4: Invalid ID Mixed characters', () => {
    expect(validateThaiID('11017002070d3')).toBe(false)
  })

  it('Case 5: Invalid ID Mixed characters', () => {
    expect(validateThaiID('rytege54fsfsf')).toBe(false)
  })

  it('Case 6: Invalid ID Just 0', () => {
    expect(validateThaiID('0')).toBe(false)
  })

  it('Case 7: Invalid ID Special character', () => {
    expect(validateThaiID('-')).toBe(false)
  })

  it('Case 8: Invalid ID Blank character', () => {
    expect(validateThaiID('')).toBe(false)
  })

  it('Case 9: Invalid ID NULL', () => {
    expect(validateThaiID(null)).toBe(false)
  })

  it('Case 10: Invalid ID Only text character', () => {
    expect(validateThaiID('blablabla')).toBe(false)
  })

  it('Case 11: Invalid ID Undefined input', () => {
    expect(validateThaiID(undefined)).toBe(false)
  })

  it('Case 12: First digit of ID start with 0', () => {
    expect(validateThaiID('0113200420331')).toBe(true)
  })
})
