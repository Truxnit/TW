import { twoWorldsAxios } from "src/apiclient/backend/two-worlds-api/two-worlds-axios";
import { Paths } from "src/apiclient/backend/two-worlds-api/generated/types";
import { AccessToken } from "src/models/auth/token";

export const sendRefreshToken = async (
  refreshToken: string
): Promise<AccessToken> => {
  const response = await twoWorldsAxios.refreshToken(
    {},
    { refresh_token: refreshToken }
  );
  const responseBody = response.data as Paths.RefreshToken.Responses.$200;

  return responseBody.access_token;
};
