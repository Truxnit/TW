import { apiPathToMswMatcher, MswRequestHandler } from "src/utils/msw-types";
import { Paths } from "src/apiclient/backend/two-worlds-api/generated/types";
import { rest } from "msw";
import { getMockAccessToken } from "src/utils/development/mock-api/mockRefreshToken";

export const mockRefreshTokenEndpoint = (): MswRequestHandler => {
  return rest.post(
    apiPathToMswMatcher("/v1/refreshToken/"),
    async (req, res, context) => {
      const requestBody = await req.json<Paths.RefreshToken.RequestBody>();
      const refreshToken = requestBody.refresh_token;
      if (refreshToken != null) {
        const accessToken = getMockAccessToken(refreshToken);
        if (accessToken === null) {
          return res(context.status(401));
        }
        return res(
          context.json<Paths.RefreshToken.Responses.$200>({
            access_token: accessToken,
          })
        );
      }
      return res(context.status(401));
    }
  );
};
