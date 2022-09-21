import { Paths } from "src/apiclient/backend/two-worlds-api/generated/types";
import { apiPathToMswMatcher, MswRequestHandler } from "src/utils/msw-types";
import { rest } from "msw";
import { getMockAccessToken } from "src/utils/development/mock-api/mockRefreshToken";

export const sendRefreshTokenMock = (): MswRequestHandler => {
  return rest.post(
    apiPathToMswMatcher("/v1/refreshToken/"),
    async (req, res, context) => {
      const requestBody = await req.json<Paths.RefreshToken.RequestBody>();
      const refreshToken = requestBody.refresh_token;
      if (refreshToken) {
        const accessToken = getMockAccessToken(refreshToken);
        if (accessToken === null) {
          return res(
            context.json({
              access_token: null,
            })
          );
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
