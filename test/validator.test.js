const validate = require('../lib/validator');

// Valid Input Test Cases

test('Case 1: Valid ID Correct pattern', () => {
    expect(validate('1101700207030')).toBe(true);
});

// Invalid Input Test Cases

test('Case 2: Invalid ID Wrong pattern', () => {
    expect(validate('1101700230705')).toBe(false);
});

test('Case 3: Invalid ID Less than 13 character', () => {
    expect(validate('110170023073')).toBe(false);
});

test('Case 4: Invalid ID Mixed character ', () => {
    expect(validate('11017002070d3')).toBe(false);
});

test('Case 5: Invalid ID Mixed character', () => {
    expect(validate('rytege54fsfsf')).toBe(false);
});

test('Case 6: Invalid ID Just 0', () => {
    expect(validate('0')).toBe(false);
});

test('Case 7: Invalid ID Special character', () => {
    expect(validate('-')).toBe(false);
});

test('Case 8: Invalid ID Blank character', () => {
    expect(validate('')).toBe(false);
});

test('Case 9: Invalid ID NULL', () => {
    expect(validate(null)).toBe(false);
});

test('Case 10: Invalid ID Only text character', () => {
    expect(validate('blablabla')).toBe(false);
});
