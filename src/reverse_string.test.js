const reverseString = require('./reverse_string');

test('reverseString hello to return olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverseString must take in a string', () => {
  expect(reverseString).toThrow('please provide a string');
});