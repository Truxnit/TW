/* eslint-disable no-console */
import { mockConsole } from "src/utils/tests/mock-console";
import {
  logDebug,
  logError,
  logException,
  logInfo,
  logWarn,
} from "src/utils/logger";

mockConsole("error");
mockConsole("log");
mockConsole("warn");
mockConsole("debug");

describe("logger", () => {
  it("logDebug calls console.debug", () => {
    logDebug("log message");
    expect(console.debug).toHaveBeenCalledWith("log message");
  });

  it("logWarn  calls console.warn", () => {
    logWarn("log message");
    expect(console.warn).toHaveBeenCalledWith("log message");
  });

  it("logError calls console.error", () => {
    logError("log message");
    expect(console.error).toHaveBeenCalledWith("log message");
  });

  it("logInfo calls console.log", () => {
    logInfo("log message");
    expect(console.log).toHaveBeenCalledWith("log message");
  });

  it("logExecption calls console.error", () => {
    const error = new Error("error message");
    logException("log message", error);
    expect(error.stack).toContain("error message");
    expect(console.error).toHaveBeenCalledWith("log message", error.stack);
  });
});
