/**
 * @author Juk V. <chukkrit.juk@gmail.com>
 * @see {@link https://github.com/jukbot/thai-citizen-id-validator|GitHub}
 */

/**
 * Validate the Thai citizen ID.
 * 
 * This function validates a Thai citizen ID by checking its format and calculating the checksum.
 * The ID must be a string of 13 digits. If the ID is provided as a number, it will be converted to a string.
 * 
 * @param {string | number} id - The ID to validate. It can be a string or a number.
 * @returns {boolean} - Returns true if the ID is valid, otherwise false.
 * 
 * @example
 * // Valid ID
 * const isValid = isValidThaiID('1112034563562'); // true
 * 
 * @example
 * // Invalid ID (wrong pattern)
 * const isValid = isValidThaiID('1101700230705'); // false
 * 
 * @example
 * // Invalid ID (less than 13 characters)
 * const isValid = isValidThaiID('110170023073'); // false
 * 
 * @example
 * // Invalid ID (mixed characters)
 * const isValid = isValidThaiID('11017002070d3'); // false
 */
function isValidThaiID(id: string | number): boolean {
  // Convert number to string if the ID is a number.
  if (typeof id === 'number') {
    id = id.toString();
  }
  // Check if the ID is a valid string of 13 digits.
  if (!/^\d{13}$/.test(id)) {
    return false;
  }

  // Calculate the check sum.
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += Number(id[i]) * (13 - i);
  }
  const checkSum = (11 - (sum % 11)) % 10;

  // Check if the check sum is equal to the last digit of the ID.
  return checkSum === Number(id[12]);
}

// Export the function.
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined' || window === undefined) {
  module.exports = isValidThaiID;
  exports.default = isValidThaiID;
  exports.isValidThaiID = isValidThaiID;
} else if (typeof window !== 'undefined') {
  // Support legacy version of the browser.
  // @ts-ignore
  window.isValidThaiID = isValidThaiID;
} else {
  // @ts-ignore
  global.isValidThaiID = isValidThaiID;
}
