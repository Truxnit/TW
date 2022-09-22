import { AccessToken } from "src/models/auth/token";
import jwtDecode from "jwt-decode";
import { mockUsers } from "src/utils/development/mock-api/mockAccessToken";

export const getMockAccessToken = (
  refreshToken: string
): AccessToken | null => {
  // eslint-disable-next-line
  let payload: any = null;
  try {
    payload = jwtDecode(refreshToken);
  } catch (e) {
    return null;
  }
  if (payload["exp"] === 1) {
    return null;
  }

  return mockUsers[payload["identity"].username].token;
};
