const Calculator = require('../src/calculator');

const calc = Calculator(1, 2);
const calc2 = Calculator(1, '2');
const calc3 = Calculator(1, 0);

test('add 1 and 2 must return 3', () => {
  expect(calc.add()).toBe(3);
});

test('add must take in numbers', () => {
  expect(calc2.add).toThrow('Input numbers only');
});

test('subtract 1 and 2 must return -1', () => {
  expect(calc.subtract()).toBe(-1);
});

test('subtract must take in numbers', () => {
  expect(calc2.subtract).toThrow('Input numbers only');
});

test('divide 1 and 2 must return 0.5', () => {
  expect(calc.divide()).toBe(0.5);
});

test('divide must take in numbers', () => {
  expect(calc2.divide).toThrow('Input numbers only');
});

test('second parameter must not be a zero', () => {
  expect(calc3.divide).toThrow('No possible division');
});

test('multiply 1 and 2 must return 2', () => {
  expect(calc.multiply()).toBe(2);
});

test('multiply must take in numbers', () => {
  expect(calc2.multiply).toThrow('Input numbers only');
});
