import {
  mockApiForJest,
  requestMatching,
} from "src/utils/tests/mock-api-for-tests";
import { rest } from "msw";
import { twoWorldsAxios } from "src/apiclient/backend/two-worlds-api/two-worlds-axios";

describe("mock-api-for-jest", () => {
  const { capturedRequest, overrideHandler } = mockApiForJest(
    rest.get("/testEndpoint", (req, res, context) => {
      return res(context.json({ success: "true" }));
    })
  );

  it("mocks api", async () => {
    const response = await twoWorldsAxios.get("/testEndpoint", {
      headers: { "test-header": "test-header-value" },
    });

    expect(response.data).toEqual({ success: "true" });
    expect(capturedRequest()).toContainEqual(
      requestMatching({
        method: "GET",
        pathname: "/testEndpoint",
        headers: expect.objectContaining({
          "test-header": "test-header-value",
        }),
      })
    );
  });

  it("clears the captured request list between tests", () => {
    expect(capturedRequest()).toEqual([]);
  });

  it("allows to override default handlers", async () => {
    overrideHandler(
      rest.get("/testEndpoint", (req, res, context) => {
        return res(context.json({ success: "overridden" }));
      })
    );

    const response = await twoWorldsAxios.get("/testEndpoint");
    expect(response.data).toEqual({
      success: "overridden",
    });
  });
});
