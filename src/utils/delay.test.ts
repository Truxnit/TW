import { delay } from "src/utils/delay";

describe("delay", () => {
  it("does not resolve the promise to early", () => {
    const callback = jest.fn();
    delay(100).then(callback);
    expect(callback).not.toHaveBeenCalled();
  });

  it("resolves the promise after the timeout", async () => {
    const start = Date.now();
    await delay(100);
    const duration = Date.now() - start;

    expect(duration).toBeLessThan(200);
    expect(duration).toBeGreaterThan(50);
  });
});
