import { twoWorldsAxios } from "src/apiclient/backend/two-worlds-api/two-worlds-axios";
import { Paths } from "src/apiclient/backend/two-worlds-api/generated/types";
import { Token } from "src/models/auth/token";

export const fetchAccessToken = async (
  username: string,
  password: string
): Promise<Token> => {
  const response = await twoWorldsAxios.login({}, { username, password });
  const responseBody = response.data as Paths.Login.Responses.$200;

  return {
    accessToken: responseBody.access_token,
    refreshToken: responseBody.refresh_token,
  };
};
