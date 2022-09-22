import { mockConsole } from "src/utils/tests/mock-console";
import { mockApiForJest } from "src/utils/tests/mock-api-for-tests";
import { fetchAccessTokenMock } from "src/apiclient/auth/fetchAccessToken.mock";
import {
  reactiveSetLoggedInUser,
  removeLoggedInUser,
} from "src/utils/tests/mock-login";
import { act, renderHook } from "@testing-library/react";
import { isAllowedToAccess, login, useAuth } from "src/utils/hooks/useAuth";
import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from "src/utils/constants";
import { mockTestPlayerAccessToken } from "src/utils/development/mock-api/mockAccessToken";
import { mockWindowLocationMethod } from "src/utils/tests/mockWindowLocationMethod";
import { logout } from "src/utils/auth/auth";
import { Roles } from "src/models/auth/auth";

mockConsole("error");
mockApiForJest(fetchAccessTokenMock());

describe("useAuth", () => {
  describe("without set auth token", () => {
    beforeEach(() => {
      removeLoggedInUser();
    });

    it("returns no user", () => {
      const { result } = renderHook(() => useAuth());
      expect(result.current.currentUser).toBeNull();
    });

    it("return false for isAuthorized", () => {
      const { result } = renderHook(() => useAuth());
      expect(result.current.isAuthorized).toBe(false);
    });
  });

  describe("logging in", () => {
    it("stores the access-token in local-storage", async () => {
      await act(() => login("testPlayer", "testpass10"));
      expect(localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY)).toEqual(
        mockTestPlayerAccessToken
      );
    });

    it("updates the 'currentUser'", async () => {
      const { result } = renderHook(() => useAuth());
      await act(() => login("testPlayer", "testpass10"));
      expect(result.current.currentUser).toEqual("testPlayer");
    });

    it("updates the 'isAuthorized' to true", async () => {
      const { result } = renderHook(() => useAuth());
      await act(() => login("testPlayer", "testpass10"));
      expect(result.current.isAuthorized).toBe(true);
    });

    it("updates isExpired to true", async () => {
      const { result } = renderHook(() => useAuth());
      await act(() => login("expiredUser", "expiredpass"));
      expect(result.current.isTokenExpired(result.current.expired)).toBe(true);
    });
  });

  describe("logging in with the wrong password", () => {
    beforeEach(() => {
      removeLoggedInUser();
    });
    it("throws an error", async () => {
      await expect(login("testPlayer", "wrongpassword")).rejects.toThrow(
        new Error("Request failed with status code 401")
      );
    });

    it("keeps the 'currentUser'", async () => {
      const { result } = renderHook(() => useAuth());
      await expect(login("testPlayer", "wrongpassword")).rejects.toThrow();
      expect(result.current.currentUser).toBeNull();
    });

    it("keeps the 'isAuthorized' at false", async () => {
      const { result } = renderHook(() => useAuth());
      await expect(login("testPlayer", "wrongpassword")).rejects.toThrow();
      expect(result.current.isAuthorized).toBe(false);
    });
  });

  describe("with a set auth token", () => {
    beforeEach(() => {
      reactiveSetLoggedInUser("testPlayer");
    });

    it("returns the current user", () => {
      const { result } = renderHook(() => useAuth());
      expect(result.current.currentUser).toEqual("testPlayer");
    });

    it("return true for isAuthorized", () => {
      const { result } = renderHook(() => useAuth());
      expect(result.current.isAuthorized).toBe(true);
    });
  });

  describe("logging out", () => {
    mockWindowLocationMethod("reload");

    it("removes the currentUser", async () => {
      const { result } = renderHook(() => useAuth());
      act(() => logout());
      expect(result.current.currentUser).toBeNull();
    });

    it("set 'isAuthorized' to false", async () => {
      const { result } = renderHook(() => useAuth());
      act(() => logout());
      expect(result.current.isAuthorized).toBe(false);
    });

    it("removes the access-token from localStorage", async () => {
      act(() => logout());
      expect(localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY)).toBeNull();
    });

    it("reloads the window", async () => {
      act(() => logout());
      expect(window.location.reload).toHaveBeenCalled();
    });
  });

  describe("isAllowedToAccess", () => {
    describe("with role=Player", () => {
      /*      it("returns false if given route is only for Player", () => {
        expect(isAllowedToAccess("/campaing", Roles.PLAYER)).toEqual(
            false
        );
        expect(isAllowedToAccess("/campaing")).toEqual(false);
      });
      it("returns false if given route is only for GameMaster", () => {
        //z.B. edit user roles
        expect(isAllowedToAccess("/test/Packer", Groups.OUTBOUND)).toEqual(
            false
        );
        expect(isAllowedToAccess("/test/Packer")).toEqual(false);
      });*/
      /*      it("returns true if given route is only for Admin", () => {
        //z.B. edit user roles
        expect(isAllowedToAccess("/???", Roles.ADMIN)).toEqual(true);
      });*/
      /*      it("returns true if given route is only for GameMaster", () => {
        //z.B. Weapons edit
        expect(isAllowedToAccess("/test/Outbound",Roles.GAMEMASTER)).toEqual(
            true
        );        expect(isAllowedToAccess("/weapon", Roles.ADMIN)).toEqual(
            true
        );
      });*/
      it("returns true if given route is for OUTBOUND and Packer", () => {
        expect(isAllowedToAccess("/nsc", Roles.ADMIN)).toEqual(true);
        expect(isAllowedToAccess("/nsc", Roles.GAMEMASTER)).toEqual(true);
        expect(isAllowedToAccess("/nsc", Roles.PLAYER)).toEqual(true);
      });
      it("returns true if given route has no role restriction", () => {
        expect(isAllowedToAccess("/login", Roles.PLAYER)).toEqual(true);
        expect(isAllowedToAccess("/login", Roles.GAMEMASTER)).toEqual(true);
        expect(isAllowedToAccess("/login", Roles.ADMIN)).toEqual(true);
        expect(isAllowedToAccess("/login")).toEqual(true);
      });
    });
  });
});
