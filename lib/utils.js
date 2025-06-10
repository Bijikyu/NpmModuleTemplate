/**
 * Utility functions for common operations
 * Contains helper functions with proper error handling
 */

/**
 * Formats a string by capitalizing first letter and trimming whitespace
 * @param {string} input - The string to format
 * @returns {string} - The formatted string
 * @throws {Error} - When input is not a string or is empty
 */
function formatString(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  
  const trimmed = input.trim();
  if (trimmed.length === 0) {
    throw new Error('Input string cannot be empty');
  }
  
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

/**
 * Validates an email address using a simple regex pattern
 * @param {string} email - The email address to validate
 * @returns {boolean} - True if email is valid, false otherwise
 * @throws {Error} - When email parameter is not a string
 */
function validateEmail(email) {
  if (typeof email !== 'string') {
    throw new Error('Email must be a string');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Generates a simple unique identifier
 * @param {number} length - The length of the ID (default: 8)
 * @returns {string} - A random alphanumeric ID
 * @throws {Error} - When length is not a positive number
 */
function generateId(length = 8) {
  if (typeof length !== 'number' || length <= 0) {
    throw new Error('Length must be a positive number');
  }
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}

module.exports = {
  formatString,
  validateEmail,
  generateId
};
