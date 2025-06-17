/**
 * Simple test file to demonstrate the npm module functionality
 */

const { formatString, validateEmail, generateId, focusFirstError, restoreFocus, setTocFocus } = require('./index.js');

console.log('=== NPM Module Template Test ===');
console.log('Available functions: formatString, validateEmail, generateId, focusFirstError, restoreFocus, setTocFocus');
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