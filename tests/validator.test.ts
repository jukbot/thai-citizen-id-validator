import { describe, it, expect } from 'bun:test';
// @ts-ignore
import isValidThaiID from '../src/validator';

describe('isValidThaiID Function', () => {
  it('Case 1: Valid ID Correct pattern', () => {
    expect(isValidThaiID('1112034563562')).toBe(true);
  });

  it('Case 2: Invalid ID Wrong pattern', () => {
    expect(isValidThaiID('1101700230705')).toBe(false);
  });

  it('Case 3: Invalid ID Less than 13 characters', () => {
    expect(isValidThaiID('110170023073')).toBe(false);
  });

  it('Case 4: Invalid ID Mixed characters', () => {
    expect(isValidThaiID('11017002070d3')).toBe(false);
  });

  it('Case 5: Invalid ID Mixed characters', () => {
    expect(isValidThaiID('rytege54fsfsf')).toBe(false);
  });
});