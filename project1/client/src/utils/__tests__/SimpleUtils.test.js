import { getDeliciousCookie } from 'src/utils/SimpleUtils';

test('yum?', () => {
  expect(getDeliciousCookie()).toBe('cookie');
});
