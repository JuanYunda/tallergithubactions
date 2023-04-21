const sum = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

const res = require('./res');

test('substact two numbers', () => {
  expect(res(1, 2)).toBe(-1);
});

const mul = require('./mul');

test('multiplicate two numbers', () => {
  expect(mul(1, 2)).toBe(2);
});