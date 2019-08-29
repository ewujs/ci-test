import {sum} from '../src/sum';

test('Check the result of sum()', () => {
  const result = sum(1, 1);
  expect(result).toBe(2);
});