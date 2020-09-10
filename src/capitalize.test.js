const capitalize = require('./capitalize');

test('capitalize bread to return Bread', () => {
  expect(capitalize('bread')).toBe('Bread');
});

test('capitalize must take in a string', () => {
  expect(capitalize).toThrow('please provide a string');
});