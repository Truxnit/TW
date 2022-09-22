/* eslint-disable no-restricted-globals */
import {
  ExistingMockUser,
  mockUsers,
} from "src/utils/development/mock-api/mockAccessToken";
import {
  LOCALSTORAGE_ACCESS_TOKEN_KEY,
  LOCALSTORAGE_REFRESH_TOKEN_KEY,
} from "src/utils/constants";
import { reactiveLocalStorage } from "src/utils/hooks/useReactiveLocalStorage";

export const setLoggedInUser = (username: ExistingMockUser): void => {
  localStorage.setItem(
    LOCALSTORAGE_ACCESS_TOKEN_KEY,
    mockUsers[username].token
  );
  localStorage.setItem(
    LOCALSTORAGE_REFRESH_TOKEN_KEY,
    mockUsers[username].refreshToken
  );
};

export const reactiveSetLoggedInUser = (username: ExistingMockUser): void => {
  reactiveLocalStorage.setItem(
    LOCALSTORAGE_ACCESS_TOKEN_KEY,
    mockUsers[username].token
  );
  reactiveLocalStorage.setItem(
    LOCALSTORAGE_REFRESH_TOKEN_KEY,
    mockUsers[username].refreshToken
  );
};

export const removeLoggedInUser = (): void => {
  localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
  localStorage.removeItem(LOCALSTORAGE_REFRESH_TOKEN_KEY);
};
