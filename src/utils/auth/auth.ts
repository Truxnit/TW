import { reactiveLocalStorage } from "src/utils/hooks/useReactiveLocalStorage";
import {
  LOCALSTORAGE_ACCESS_TOKEN_KEY,
  LOCALSTORAGE_REFRESH_TOKEN_KEY,
} from "src/utils/constants";
import { sendRefreshToken } from "src/apiclient/auth/sendRefreshToken";

export const logout = (reload = true): void => {
  reactiveLocalStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
  reactiveLocalStorage.removeItem(LOCALSTORAGE_REFRESH_TOKEN_KEY);
  if (reload) {
    window.location.reload();
  }
};

export const updateAccessToken = async (): Promise<void> => {
  const refreshToken = reactiveLocalStorage.getItem(
    LOCALSTORAGE_REFRESH_TOKEN_KEY
  );
  if (refreshToken) {
    const accessToken = await sendRefreshToken(refreshToken);

    if (accessToken) {
      reactiveLocalStorage.setItem(LOCALSTORAGE_REFRESH_TOKEN_KEY, accessToken);
      return;
    }
  }
  logout();
};
