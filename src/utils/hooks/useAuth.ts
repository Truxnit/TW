import { TwoWorldsRoutes } from "src/utils/routing/resolveRoute";
import {
  reactiveLocalStorage,
  useReactiveLocalStorage,
} from "src/utils/hooks/useReactiveLocalStorage";
import {
  LOCALSTORAGE_ACCESS_TOKEN_KEY,
  LOCALSTORAGE_REFRESH_TOKEN_KEY,
} from "src/utils/constants";
import { useMemo } from "react";
import jwtDecode from "jwt-decode";
import { AccessTokenParsed } from "src/models/auth/login";
import { fetchAccessToken } from "src/apiclient/auth/fetchAccessToken";
import { mapRoleKeyToEnum } from "src/utils/mapper/roleMapper";
import { logout } from "src/utils/auth/auth";
import { roleAccessControl, Roles } from "src/models/auth/auth";

export interface UseAuthResult {
  login(username: string, password: string): Promise<void>;
  logout(): void;
  isAllowedToAccess(path: TwoWorldsRoutes, group: Roles): boolean;
  isTokenExpired(expiredDate?: number): boolean;
  currentUser: string | null;
  isAuthorized: boolean;
  group: Roles | undefined;
  expired: number | undefined;
}

export const login = async (
  userName: string,
  password: string
): Promise<void> => {
  const token = await fetchAccessToken(userName, password);
  reactiveLocalStorage.setItem(
    LOCALSTORAGE_ACCESS_TOKEN_KEY,
    token.accessToken
  );
  reactiveLocalStorage.setItem(
    LOCALSTORAGE_REFRESH_TOKEN_KEY,
    token.refreshToken
  );
};

export const isAllowedToAccess = (
  path: TwoWorldsRoutes,
  role?: Roles
): boolean => {
  if (roleAccessControl[path].length === 0) {
    return true;
  }
  if (!role) {
    return false;
  }
  const groupValue = mapRoleKeyToEnum(role);
  return !!(groupValue && roleAccessControl[path].includes(groupValue));
};

export const isTokenExpired = (expiredDate?: number): boolean => {
  if (expiredDate) {
    const currentDate = Date.now();
    if (currentDate < expiredDate * 1000) {
      return false;
    }
  }
  return true;
};

export const useAuth = (): UseAuthResult => {
  const accessToken = useAccessToken();
  const decodedToken = useMemo(() => {
    return accessToken != null
      ? (jwtDecode(accessToken) as AccessTokenParsed)
      : null;
  }, [accessToken]);

  return {
    currentUser: decodedToken != null ? decodedToken.identity.username : null,
    isAuthorized: decodedToken != null,
    group:
      decodedToken != null
        ? mapRoleKeyToEnum(decodedToken.identity.role)
        : undefined,
    expired: decodedToken != null ? decodedToken.exp : undefined,
    login,
    logout,
    isAllowedToAccess,
    isTokenExpired,
  };
};

export const useAccessToken = (): string | null => {
  return useReactiveLocalStorage(LOCALSTORAGE_ACCESS_TOKEN_KEY);
};
