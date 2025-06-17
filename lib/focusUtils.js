/**
 * Focus management utilities for accessibility and user experience
 * Contains helper functions for managing focus in forms and navigation
 */

/**
 * Focuses the first invalid field in a form based on validation errors
 * @param {Object} errors - Object containing validation errors with field keys
 * @param {Object} refs - Object containing React refs for form fields
 * @throws {Error} - When refs parameter is not provided or invalid
 */
function focusFirstError(errors, refs) {
  if (!refs || typeof refs !== 'object') {
    throw new Error('Refs must be provided as an object');
  }
  
  console.log(`focusFirstError is running with ${Object.keys(errors || {})}`);
  
  try {
    const key = Object.keys(errors || {})[0];
    if (key && refs[key] && refs[key].current && typeof refs[key].current.focus === 'function') {
      refs[key].current.focus();
    }
    console.log(`focusFirstError is returning undefined`);
  } catch (err) {
    console.log(`focusFirstError error ${err.message}`);
    throw err;
  }
}

/**
 * Restores focus to a specified element using a React ref
 * @param {Object} btnRef - React ref object pointing to the element to focus
 * @throws {Error} - When attempting to focus fails
 */
function restoreFocus(btnRef) {
  console.log(`restoreFocus is running with ${btnRef?.current}`);
  
  try {
    if (btnRef && btnRef.current && typeof btnRef.current.focus === 'function') {
      btnRef.current.focus();
    }
    console.log(`restoreFocus is returning undefined`);
  } catch (err) {
    console.log(`restoreFocus error ${err.message}`);
    throw err;
  }
}

/**
 * Manages focus for table of contents or navigation menu accessibility
 * @param {boolean} open - Whether the menu/TOC is open or closed
 * @param {Object} btnRef - React ref for the toggle button element
 * @param {Object} linkRef - React ref for the first link/menu item
 * @throws {Error} - When focus management fails
 */
function setTocFocus(open, btnRef, linkRef) {
  if (typeof open !== 'boolean') {
    throw new Error('Open parameter must be a boolean');
  }
  
  console.log(`setTocFocus is running with ${open}`);
  
  try {
    if (open) {
      restoreFocus(linkRef);
    } else {
      restoreFocus(btnRef);
    }
    console.log(`setTocFocus is returning undefined`);
  } catch (err) {
    console.log(`setTocFocus error ${err.message}`);
    throw err;
  }
}

module.exports = {
  focusFirstError,
  restoreFocus,
  setTocFocus
};