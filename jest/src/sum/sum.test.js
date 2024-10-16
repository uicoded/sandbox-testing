const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('handles single argument ', () => {
  expect(sum(1)).toBe(1);
});

test('handles multiple arguments: adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('throws an error when an empty array is provided', () => {
  expect(() => sum()).toThrow('Invalid arguments');
});

test('correctly sums numbers with a mix of positive and negative signs', () => {
  expect(sum(1, -2, 3, -4)).toBe(-2);
});
