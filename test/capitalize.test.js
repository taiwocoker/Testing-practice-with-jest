const capitalize = require('../src/capitalize');

test('capitalize bread to return Bread', () => {
  expect(capitalize('bread')).toBe('Bread');
});

test('capitalize bread to return hello world', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('capitalize must take in a string', () => {
  expect(capitalize).toThrow('please provide a string');
});