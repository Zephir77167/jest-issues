import { setName, getName } from 'src/shared/utils/NameUtils';

test('without setting it', () => {
  expect(getName()).toBe('');
});

test('after setting it', () => {
  setName('test');
  expect(getName()).toBe('test');
});
