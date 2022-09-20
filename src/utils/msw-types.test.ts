import { apiPathToMswMatcher } from "src/utils/msw-types";

describe("msw-types", () => {
  describe("apiPathToMswMatcher", () => {
    test("replaces openapi route parameters to msw", () => {
      expect(apiPathToMswMatcher("/v1/login/")).toEqual("/v1/login/");
    });
  });
});
