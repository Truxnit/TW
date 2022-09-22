/* eslint-disable no-console */
export const mockConsole = (method: keyof Console): void => {
  /*  const originalMethod = console[method];*/

  beforeEach(() => {
    console[method] = jest.fn();
  });

  /*  afterEach(() => {
    console[method] = originalMethod;
  });*/
};

export const withMockedConsole = async (
  callback: (console: Console) => void
): Promise<void> => {
  await new Promise((resolve) => process.nextTick(resolve));
  return callback(console);
};
