/**
 * Main entry point for the npm module
 * Exports all public functions and utilities
 */

const { formatString, validateEmail, generateId } = require('./lib');

module.exports = {
  formatString,
  validateEmail,
  generateId
};
