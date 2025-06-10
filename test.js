/**
 * Simple test file to demonstrate the npm module functionality
 */

const { formatString, validateEmail, generateId } = require('./index.js');

console.log('=== NPM Module Template Test ===');
console.log('Available functions: formatString, validateEmail, generateId');
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

// Test error handling
console.log('Testing error handling:');
try {
  formatString('');
} catch (error) {
  console.log('Empty string error:', error.message);
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