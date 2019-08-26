import {sum} from '../sum';

test('Check the result of sum(1, 1) + 8', () => {
  const result = sum(1, 1) + 8;
  expect(result).toBe(10);
});