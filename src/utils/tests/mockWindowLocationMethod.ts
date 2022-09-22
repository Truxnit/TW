/*
We can't set a spy on the window location reload function since its readonly and causes the error
'Cannot assign to read only property 'reload' of object '[object Location]' so we use this workaround to check if the given function has been called.
 */
/* istanbul ignore reason: Should never happen, this is a test-util */
export const mockWindowLocationMethod = (
  method: keyof typeof window.location
): void => {
  const { location } = window;
  beforeAll(() => {
    /* The TS2790 error was added in https://github.com/microsoft/TypeScript/pull/37921 because interfaces were not invalidated
    by deleting a prop but in this case we want to delete it to override it with a mocked jest function
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete window.location;

    window.location = {
      ...location,
      [method]: jest.fn(),
    };
  });

  afterAll(() => {
    window.location = location;
  });
};
