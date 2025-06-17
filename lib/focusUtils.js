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

/**
 * Calculates the new tab index for keyboard navigation with arrow keys and Home/End
 * @param {string} key - The keyboard key pressed (ArrowRight, ArrowLeft, Home, End)
 * @param {number} index - Current tab index
 * @param {number} total - Total number of tabs
 * @returns {number} - New tab index to focus
 * @throws {Error} - When parameters are invalid
 */
function calcNewTabIndex(key, index, total) {
  if (typeof key !== 'string') {
    throw new Error('Key parameter must be a string');
  }
  if (typeof index !== 'number' || index < 0) {
    throw new Error('Index must be a non-negative number');
  }
  if (typeof total !== 'number' || total <= 0) {
    throw new Error('Total must be a positive number');
  }
  if (index >= total) {
    throw new Error('Index must be less than total');
  }
  
  console.log(`calcNewTabIndex is running with ${key},${index},${total}`);
  
  try {
    let newIndex = index;
    if (key === 'ArrowRight') {
      newIndex = (index + 1) % total;
    } else if (key === 'ArrowLeft') {
      newIndex = (index - 1 + total) % total;
    } else if (key === 'Home') {
      newIndex = 0;
    } else if (key === 'End') {
      newIndex = total - 1;
    }
    console.log(`calcNewTabIndex is returning ${newIndex}`);
    return newIndex;
  } catch (err) {
    console.log(`calcNewTabIndex error ${err.message}`);
    throw err;
  }
}

/**
 * Manages the inert attribute for accessibility, controlling focusability and interaction
 * @param {HTMLElement} el - The DOM element to modify
 * @param {boolean} open - Whether to make the element inert (true) or interactive (false)
 * @throws {Error} - When the open parameter is not a boolean
 */
function toggleInert(el, open) {
  if (typeof open !== 'boolean') {
    throw new Error('Open parameter must be a boolean');
  }
  
  console.log(`toggleInert is running with ${open}`);
  
  try {
    if (!el) return;
    
    if (open) {
      if ('inert' in el) {
        el.inert = true;
      } else {
        el.setAttribute('inert', '');
      }
      el.setAttribute('tabindex', '-1');
    } else {
      if ('inert' in el) {
        el.inert = false;
      } else {
        el.removeAttribute('inert');
      }
      el.removeAttribute('tabindex');
    }
    console.log(`toggleInert is returning undefined`);
  } catch (err) {
    console.log(`toggleInert error ${err.message}`);
    throw err;
  }
}

module.exports = {
  focusFirstError,
  restoreFocus,
  setTocFocus,
  calcNewTabIndex,
  toggleInert
};