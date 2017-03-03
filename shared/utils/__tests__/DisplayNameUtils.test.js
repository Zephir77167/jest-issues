import { setName, getName } from 'src/shared/utils/NameUtils';
import { printName } from 'src/shared/utils/DisplayNameUtils';

const INITIAL_CONSOLE_LOG = console.log;

test('display name', () => {
  const consoleLogMock = jest.fn();
  console.log = consoleLogMock;

  setName('test');
  printName();

  expect(consoleLogMock).toHaveBeenCalledTimes(1);
  expect(consoleLogMock.mock.calls[0][0]).toBe('test');

  console.log = INITIAL_CONSOLE_LOG;
});
