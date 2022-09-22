import { AxiosRequestConfig } from "openapi-client-axios";
import { twoWorldsAxios } from "src/apiclient/backend/two-worlds-api/two-worlds-axios";
import { AxiosError } from "axios";
import { getAuthorizationHeader } from "src/utils/auth/access-token";
import { logout } from "src/utils/auth/auth";

const setAndReturnConfigHeaders = (config: AxiosRequestConfig) => {
  config.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(config.headers || {}),
  };
  const authorizationHeader = getAuthorizationHeader();
  if (authorizationHeader) {
    config.headers.authorization = authorizationHeader;
  }
  return config;
};

const errorFunction = async (error: AxiosError) => {
  /*  if (error.response?.status === 503) {
  }*/
  if (error.response?.status === 401 || error.response?.status === 403) {
    logout(false);
  }
  throw error;
};

export const initAxios = (): void => {
  twoWorldsAxios.interceptors.request.use((config) => {
    return setAndReturnConfigHeaders(config);
  });

  twoWorldsAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return errorFunction(error);
    }
  );
};
