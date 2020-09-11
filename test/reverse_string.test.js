const reverseString = require('../src/reverse_string');

test('reverseString hello to return olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverseString microverse student to return tneduts esrevorcim', () => {
  expect(reverseString('microverse student')).toBe('tneduts esrevorcim');
});

test('reverseString must take in a string', () => {
  expect(reverseString).toThrow('please provide a string');
});