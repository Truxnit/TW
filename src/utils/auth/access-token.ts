import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from "src/utils/constants";
import { reactiveLocalStorage } from "src/utils/hooks/useReactiveLocalStorage";

export const getAccessToken = (): string | null => {
  return reactiveLocalStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
};

export const getAuthorizationHeader = (): string | undefined => {
  const token = getAccessToken();
  if (token != null) {
    return `Bearer ${token}`;
  }
};
