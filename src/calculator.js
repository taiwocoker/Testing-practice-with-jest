/*
  eslint-disable func-names,
*/

function Calculator(a, b) {
  const notify = function () {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') {
      throw new Error('Input numbers only');
    }
  };

  const add = function () {
    notify();
    return a + b;
  };
  const subtract = function () {
    notify();
    return a - b;
  };
  const divide = function () {
    notify();
    if (b !== 0) {
      return a / b;
    }
    throw new Error('No possible division');
  };
  const multiply = function () {
    notify();
    return a * b;
  };


  return {
    add, subtract, divide, multiply,
  };
}

module.exports = Calculator;