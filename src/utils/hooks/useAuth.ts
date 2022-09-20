import { TwoWorldsRoutes } from "src/utils/routing/resolveRoute";
import {
  /*  reactiveLocalStorage,*/
  useReactiveLocalStorage,
} from "src/utils/hooks/useReactiveLocalStorage";
import {
  LOCALSTORAGE_ACCESS_TOKEN_KEY,
  /*  LOCALSTORAGE_REFRESH_TOKEN_KEY,*/
} from "src/utils/constants";

export enum Groups {
  PLAYER = "Spieler",
  GAMEMASTER = "GameMaster", // hier irgendwas mit den Kampagnen bedenkenk
  ADMIN = "Admin",
}

export interface UseAuthResult {
  login(username: string, password: string): Promise<void>;
  logout(): void;
  isAllowedToAccess(path: TwoWorldsRoutes, group: Groups): boolean;
  isTokenExpired(expiredDate?: number): boolean;
  currentUser: string | null;
  isAuthorized: boolean;
  group: Groups | undefined;
  expired: number | undefined;
}

export const login = async (
  userName: string,
  password: string
): Promise<void> => {
  /*  const token = fetchAccessToken(userName, password);
  reactiveLocalStorage.setItem(
    LOCALSTORAGE_ACCESS_TOKEN_KEY,
    token.accessToken
  );
  reactiveLocalStorage.setItem(
    LOCALSTORAGE_REFRESH_TOKEN_KEY,
    token.refreshToken
  );*/
};

export const isAllowedToAccess = (
  path: TwoWorldsRoutes,
  group?: Groups
): boolean => {
  /*  if (groupAccessControl[path].length === 0) {
    return true;
  }
  if (!group) {
    return false;
  }
  const groupValue = mapGroupKeyToEnum(group);
  return !!(groupValue && groupAccessControl[path].includes(groupValue));*/
  return false;
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
/*

export const useAuth = (): UseAuthResult => {
  const accessToken = useAccessToken();
 /!* const decodedToken = useMemo(() => {
    return accessToken != null
      ? (jwtDecode(accessToken) as AccessTokenParsed)
      : null;
  }, [accessToken]);*!/
/!*
  return {
    currentUser: decodedToken != null ? decodedToken.identity.username : null,
    isAuthorized: decodedToken != null,
    group:
      decodedToken != null
        ? mapGroupKeyToEnum(decodedToken.identity.group)
        : undefined,
    expired: decodedToken != null ? decodedToken.exp : undefined,
    login,
    logout,
    isAllowedToAccess,
    isTokenExpired,
  };*!/
};
*/

export const useAccessToken = (): string | null => {
  return useReactiveLocalStorage(LOCALSTORAGE_ACCESS_TOKEN_KEY);
};
