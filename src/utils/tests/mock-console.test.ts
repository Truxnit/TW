/* eslint-disable no-console */
import { mockConsole, withMockedConsole } from "src/utils/tests/mock-console";

mockConsole("error");

describe("withMockedConsole", () => {
  it("calls the callback with the corresponding console-methods", async () => {
    console.error("test");
    await withMockedConsole(({ error }) => {
      expect(error).toHaveBeenCalledWith("test");
    });
  });
});
