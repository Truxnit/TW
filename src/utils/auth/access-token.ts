import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from "src/utils/constants";

export const getAccessToken = (): string | null => {
  return localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
};

export const getAuthorizationHeader = (): string | undefined => {
  const token = getAccessToken();
  if (token != null) {
    return `Bearer ${token}`;
  }
};
