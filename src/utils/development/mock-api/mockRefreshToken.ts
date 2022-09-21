import { sign, verify } from "jsonwebtoken";
import { createAccessTokenMock } from "src/utils/development/mock-api/mockAccessToken";
import { Identity } from "src/models/auth/login";
import { AccessToken } from "src/models/auth/token";

export const jwtRefreshTokenSecurity = "refreshToken";

export const createRefreshTokenMock = (identity: Identity): string => {
  return sign({ identity: identity }, jwtRefreshTokenSecurity, {
    expiresIn: 28800,
  });
};

export const getMockAccessToken = (
  refreshToken: string
): AccessToken | null => {
  // eslint-disable-next-line
  let payload: any = null;
  try {
    payload = verify(refreshToken, jwtRefreshTokenSecurity);
  } catch (e) {
    return null;
  }
  return createAccessTokenMock(payload["identity"]);
};
