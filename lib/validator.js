// @ts-check
"use strict";

/**
 * Checks if a Thai ID is valid.
 *
 * @param {string} id - The Thai ID to validate, a 13-digit string.
 * @returns {boolean} True if the Thai ID is valid, false otherwise.
 */
function isValidThaiID(id) {
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
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = isValidThaiID;
  exports.default = isValidThaiID;
  exports.isValidThaiID = isValidThaiID;
} else {
  // @ts-ignore
  window.isValidThaiID = isValidThaiID;
}

export default isValidThaiID;
