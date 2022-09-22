/* eslint-disable no-console */
export const logDebug = (...args: unknown[]): void => {
  console.debug(...args);
};

export const logInfo = (...args: unknown[]): void => {
  console.log(...args);
};

export const logWarn = (...args: unknown[]): void => {
  console.warn(...args);
};

export const logError = (...args: unknown[]): void => {
  console.error(...args);
};

export const logException = (message: string, error: Error): void => {
  console.error(message, error.stack);
};
