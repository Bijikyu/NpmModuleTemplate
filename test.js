/**
 * Simple test file to demonstrate the npm module functionality
 */

const { formatString, validateEmail, generateId, focusFirstError, restoreFocus, setTocFocus, calcNewTabIndex } = require('./index.js');

console.log('=== NPM Module Template Test ===');
console.log('Available functions: formatString, validateEmail, generateId, focusFirstError, restoreFocus, setTocFocus, calcNewTabIndex');
console.log('');

// Test formatString
console.log('Testing formatString:');
try {
  console.log('formatString("  hello world  "):', formatString('  hello world  '));
  console.log('formatString("JAVASCRIPT"):', formatString('JAVASCRIPT'));
  console.log('formatString("node.js"):', formatString('node.js'));
} catch (error) {
  console.log('formatString error:', error.message);
}
console.log('');

// Test validateEmail
console.log('Testing validateEmail:');
try {
  console.log('validateEmail("test@example.com"):', validateEmail('test@example.com'));
  console.log('validateEmail("invalid-email"):', validateEmail('invalid-email'));
  console.log('validateEmail("user@domain.co.uk"):', validateEmail('user@domain.co.uk'));
} catch (error) {
  console.log('validateEmail error:', error.message);
}
console.log('');

// Test generateId
console.log('Testing generateId:');
try {
  console.log('generateId():', generateId());
  console.log('generateId(12):', generateId(12));
  console.log('generateId(4):', generateId(4));
} catch (error) {
  console.log('generateId error:', error.message);
}
console.log('');

// Test focusFirstError
console.log('Testing focusFirstError:');
try {
  // Mock refs object for testing
  const mockRefs = {
    email: { current: { focus: () => console.log('Email field focused') } },
    password: { current: { focus: () => console.log('Password field focused') } }
  };
  
  const errors = { email: 'Invalid email', password: 'Password too short' };
  console.log('focusFirstError with errors:', focusFirstError(errors, mockRefs));
  
  // Test with no errors
  console.log('focusFirstError with no errors:', focusFirstError({}, mockRefs));
  
  // Test with missing ref
  const incompleteRefs = { name: { current: { focus: () => console.log('Name focused') } } };
  console.log('focusFirstError with missing ref:', focusFirstError(errors, incompleteRefs));
} catch (error) {
  console.log('focusFirstError error:', error.message);
}
console.log('');

// Test restoreFocus
console.log('Testing restoreFocus:');
try {
  const mockButtonRef = { current: { focus: () => console.log('Button focused') } };
  console.log('restoreFocus with valid ref:', restoreFocus(mockButtonRef));
  
  // Test with null ref
  console.log('restoreFocus with null ref:', restoreFocus(null));
  
  // Test with ref without focus method
  const invalidRef = { current: {} };
  console.log('restoreFocus with invalid ref:', restoreFocus(invalidRef));
} catch (error) {
  console.log('restoreFocus error:', error.message);
}
console.log('');

// Test setTocFocus
console.log('Testing setTocFocus:');
try {
  const mockButtonRef = { current: { focus: () => console.log('TOC button focused') } };
  const mockLinkRef = { current: { focus: () => console.log('TOC link focused') } };
  
  console.log('setTocFocus when open (true):', setTocFocus(true, mockButtonRef, mockLinkRef));
  console.log('setTocFocus when closed (false):', setTocFocus(false, mockButtonRef, mockLinkRef));
} catch (error) {
  console.log('setTocFocus error:', error.message);
}
console.log('');

// Test calcNewTabIndex
console.log('Testing calcNewTabIndex:');
try {
  // Test arrow key navigation
  console.log('calcNewTabIndex ArrowRight from 0 of 5:', calcNewTabIndex('ArrowRight', 0, 5));
  console.log('calcNewTabIndex ArrowRight from 4 of 5 (wrap):', calcNewTabIndex('ArrowRight', 4, 5));
  console.log('calcNewTabIndex ArrowLeft from 0 of 5 (wrap):', calcNewTabIndex('ArrowLeft', 0, 5));
  console.log('calcNewTabIndex ArrowLeft from 2 of 5:', calcNewTabIndex('ArrowLeft', 2, 5));
  
  // Test Home/End navigation
  console.log('calcNewTabIndex Home from 3 of 5:', calcNewTabIndex('Home', 3, 5));
  console.log('calcNewTabIndex End from 1 of 5:', calcNewTabIndex('End', 1, 5));
  
  // Test with different key (should stay same)
  console.log('calcNewTabIndex Space from 2 of 5:', calcNewTabIndex('Space', 2, 5));
  
  // Test single tab scenario
  console.log('calcNewTabIndex ArrowRight from 0 of 1:', calcNewTabIndex('ArrowRight', 0, 1));
} catch (error) {
  console.log('calcNewTabIndex error:', error.message);
}
console.log('');

// Test error handling
console.log('Testing error handling:');
try {
  formatString('');
} catch (error) {
  console.log('Empty string error:', error.message);
}

try {
  focusFirstError({}, null);
} catch (error) {
  console.log('focusFirstError null refs error:', error.message);
}

try {
  setTocFocus('not-boolean', {}, {});
} catch (error) {
  console.log('setTocFocus invalid type error:', error.message);
}

try {
  calcNewTabIndex(123, 0, 5);
} catch (error) {
  console.log('calcNewTabIndex invalid key type error:', error.message);
}

try {
  calcNewTabIndex('ArrowRight', -1, 5);
} catch (error) {
  console.log('calcNewTabIndex negative index error:', error.message);
}

try {
  calcNewTabIndex('ArrowRight', 5, 5);
} catch (error) {
  console.log('calcNewTabIndex index >= total error:', error.message);
}

try {
  calcNewTabIndex('ArrowRight', 0, 0);
} catch (error) {
  console.log('calcNewTabIndex zero total error:', error.message);
}

try {
  formatString(123);
} catch (error) {
  console.log('Non-string input error:', error.message);
}

try {
  generateId(-5);
} catch (error) {
  console.log('Invalid length error:', error.message);
}

console.log('');
console.log('=== All tests completed ===');