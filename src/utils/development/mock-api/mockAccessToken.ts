import { Identity } from "src/models/auth/login";
import { Groups } from "src/utils/hooks/useAuth";
import { sign } from "jsonwebtoken";
import { createRefreshTokenMock } from "src/utils/development/mock-api/mockRefreshToken";

export const jwtAccessTokenSecurity = "accessToken";

export const createAccessTokenMock = (
  identity: Identity,
  isExpired = false
): string => {
  return sign({ identity: identity }, jwtAccessTokenSecurity, {
    expiresIn: !isExpired ? 180 : -1,
  });
};

export const testPlayerIdentity: Identity = {
  id: "9e12082e-c994-46ff-a1cf-466257328c79",
  username: "testPlayer",
  group: Groups.PLAYER,
};

export const gameMasterIdentity: Identity = {
  id: "9e12082e-c994-46ff-a1cf-466257328c79",
  username: "gameMaster",
  group: Groups.GAMEMASTER,
};

export const adminIdentity: Identity = {
  id: "9e12082e-c994-46ff-a1cf-586257328c23",
  username: "Admin",
  group: Groups.ADMIN,
};

export const mockTestPlayerAccessToken =
  createAccessTokenMock(testPlayerIdentity);
export const mockExpiredToken = createAccessTokenMock(gameMasterIdentity, true);
export const mockGameMasterToken = createAccessTokenMock(gameMasterIdentity);
export const mockAdminToken = createAccessTokenMock(adminIdentity);

export const mockTestPlayerRefreshToken =
  createRefreshTokenMock(testPlayerIdentity);
export const mockExpiredRefreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJpZCI6IjllMTIwODJlLWM5OTQtNDZmZi1hMWNmLTQ2NjI1NzMyOGM3OSIsInVzZXJuYW1lIjoib3V0Ym91bmQiLCJncm91cCI6Ik91dGJvdW5kIn0sImlhdCI6MSwiZXhwIjoxfQ.-I9HOSZAVxkdDm3-IeiGz9zfD6sYPT9S3fpxPe0Fa3Y";
export const mockGameMasterRefreshToken =
  createRefreshTokenMock(gameMasterIdentity);
export const mockAdminRefreshToken = createRefreshTokenMock(adminIdentity);

export type ExistingMockUser =
  | "testplayer"
  | "expireduser"
  | "gameMaster"
  | "admin";

type UserData = { password: string; token: string; refreshToken: string };

export const createTokenForUserName = (
  userName: string,
  isAccessToken = true
): string => {
  switch (userName) {
    case "testplayer":
      return isAccessToken
        ? createAccessTokenMock(testPlayerIdentity)
        : createRefreshTokenMock(testPlayerIdentity);
    case "expireduser":
      return isAccessToken
        ? createAccessTokenMock(gameMasterIdentity, true)
        : mockExpiredRefreshToken;
    case "gameMaster":
      return isAccessToken
        ? createAccessTokenMock(gameMasterIdentity)
        : createRefreshTokenMock(gameMasterIdentity);
    case "admin":
      return isAccessToken
        ? createAccessTokenMock(adminIdentity)
        : createRefreshTokenMock(adminIdentity);
  }
  return "";
};

export const mockUsers: Record<ExistingMockUser | string, UserData> = {
  testplayer: {
    password: "testpass",
    token: mockTestPlayerAccessToken,
    refreshToken: mockTestPlayerRefreshToken,
  },
  expireduser: {
    password: "expiredpass",
    token: mockExpiredToken,
    refreshToken: mockExpiredRefreshToken,
  },
  gameMaster: {
    password: "gamemasterpass",
    token: mockGameMasterToken,
    refreshToken: mockGameMasterRefreshToken,
  },
  admin: {
    password: "adminpass",
    token: mockAdminToken,
    refreshToken: mockAdminRefreshToken,
  },
};
