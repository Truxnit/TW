import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from "src/utils/constants";
import { getAuthorizationHeader } from "src/utils/auth/access-token";
import { mockTestPlayerAccessToken } from "src/utils/development/mock-api/mockAccessToken";

describe("access-token", () => {
  describe("without set auth token", () => {
    beforeEach(() => {
      localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
    });

    it("authorization-header is NOT set", () => {
      expect(getAuthorizationHeader()).toBeUndefined();
    });
  });

  describe("after setting an auth token", () => {
    beforeEach(() => {
      localStorage.setItem(
        LOCALSTORAGE_ACCESS_TOKEN_KEY,
        mockTestPlayerAccessToken
      );
    });

    it("authorization-header is set", () => {
      expect(getAuthorizationHeader()).toEqual(
        `Bearer ${mockTestPlayerAccessToken}`
      );
    });
  });
});
