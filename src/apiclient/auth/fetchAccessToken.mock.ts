import { apiPathToMswMatcher, MswRequestHandler } from "src/utils/msw-types";
import { rest } from "msw";
import { mockUsers } from "src/utils/development/mock-api/mockAccessToken";
import { Paths } from "src/apiclient/backend/two-worlds-api/generated/types";

export const fetchAccessTokenMock = (): MswRequestHandler => {
  return rest.post(
    apiPathToMswMatcher("/v1/login/"),
    async (req, res, context) => {
      const requestBody = await req.json<Paths.Login.RequestBody>();
      const user = mockUsers[requestBody.username];
      if (user !== null && requestBody.password === user.password) {
        return res(
          context.json<Paths.Login.Responses.$200>({
            access_token: user.token,
            token_type: "Bearer ",
            refresh_token: user.refreshToken,
          })
        );
      }
      return res(context.status(401));
    }
  );
};
