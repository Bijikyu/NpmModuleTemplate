/**
 * Main entry point for the npm module
 * Exports all public functions and utilities
 */

const { formatString, validateEmail, generateId, focusFirstError, restoreFocus, setTocFocus, calcNewTabIndex, toggleInert } = require('./lib');

module.exports = {
  formatString,
  validateEmail,
  generateId,
  focusFirstError,
  restoreFocus,
  setTocFocus,
  calcNewTabIndex,
  toggleInert
};
