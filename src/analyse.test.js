const analyse = require('./analyse');

test('should have average', () => {
  expect(analyse([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('should have min', () => {
  expect(analyse([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('should have max', () => {
  expect(analyse([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('should have length', () => {
  expect(analyse([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
