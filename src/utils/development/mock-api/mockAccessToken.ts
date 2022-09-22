import { Identity } from "src/models/auth/login";

import { Roles } from "src/models/auth/auth";

export const testPlayerIdentity: Identity = {
  id: "4e12082e-c994-46ff-a1cf-466257328d48",
  username: "testPlayer",
  role: Roles.PLAYER,
};

export const gameMasterIdentity: Identity = {
  id: "9e12082e-c994-46ff-a1cf-466257328c79",
  username: "gameMaster",
  role: Roles.GAMEMASTER,
};

export const adminIdentity: Identity = {
  id: "8e12082e-c994-46ff-a1cf-586257328c23",
  username: "Admin",
  role: Roles.ADMIN,
};

export const mockTestPlayerAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJpZCI6IjRlMTIwODJlLWM5OTQtNDZmZi1hMWNmLTQ2NjI1NzMyOGQ0OCIsInVzZXJuYW1lIjoidGVzdFBsYXllciIsInJvbGUiOiJTcGllbGVyIn0sImlhdCI6MTY2Mzg0MDI0OH0.z3ybHLaZn_cvY8OU3Jqh3ekUxy_mFKBHMiTp3ztQjA0";
export const mockExpiredToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJpZCI6IjllMTIwODJlLWM5OTQtNDZmZi1hMWNmLTQ2NjI1NzMyOGM3OSIsInVzZXJuYW1lIjoiZ2FtZU1hc3RlciIsInJvbGUiOiJHYW1lTWFzdGVyIn0sImlhdCI6MTY2MzgzODc0MSwiZXhwIjoxNjYzODM4NzQwfQ.JzpYzCfZghvrsdoOFmquKuZtmUGoSrXb_ajpwclLroY";
export const mockGameMasterToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJpZCI6IjllMTIwODJlLWM5OTQtNDZmZi1hMWNmLTQ2NjI1NzMyOGM3OSIsInVzZXJuYW1lIjoiZ2FtZU1hc3RlciIsInJvbGUiOiJHYW1lTWFzdGVyIn0sImlhdCI6MTY2Mzg0MDI0OH0.ZSr3M2xesFLCDoh5itm--8hW0Y-fyn_3h0ZmLHWtzWE";
export const mockAdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJpZCI6IjhlMTIwODJlLWM5OTQtNDZmZi1hMWNmLTU4NjI1NzMyOGMyMyIsInVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiQWRtaW4ifSwiaWF0IjoxNjYzODQwMTYwfQ.544ZEXBvIxOjoTszUTC4ZKwKsr4-HYmt-hFRnzmf_yI";

export const mockTestPlayerRefreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJpZCI6IjRlMTIwODJlLWM5OTQtNDZmZi1hMWNmLTQ2NjI1NzMyOGQ0OCIsInVzZXJuYW1lIjoidGVzdFBsYXllciIsInJvbGUiOiJTcGllbGVyIn0sImlhdCI6MTY2Mzg0MDc5NywiZXhwIjoxOTUxODQwNzk3fQ.7E4JiECuEQ-8Apg0O_dVswJfPfvD19OgSvRsz_yF1A4";
export const mockExpiredRefreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJpZCI6IjRlMTIwODJlLWM5OTQtNDZmZi1hMWNmLTQ2NjI1NzMyOGQ0OCIsInVzZXJuYW1lIjoidGVzdFBsYXllciIsInJvbGUiOiJTcGllbGVyIn0sImlhdCI6MSwiZXhwIjoxfQ.yXux59WKth95e7zYjwpXZehm81078v1stKPELnxgmL4";
export const mockGameMasterRefreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJpZCI6IjllMTIwODJlLWM5OTQtNDZmZi1hMWNmLTQ2NjI1NzMyOGM3OSIsInVzZXJuYW1lIjoiZ2FtZU1hc3RlciIsInJvbGUiOiJHYW1lTWFzdGVyIn0sImlhdCI6MTY2Mzg0MDc5NywiZXhwIjoxOTUxODQwNzk3fQ.qAro6lxcOSgCQEMvfxHkd4mSfjmf4M8gzAYYKbXHkbY";
export const mockAdminRefreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6eyJpZCI6IjhlMTIwODJlLWM5OTQtNDZmZi1hMWNmLTU4NjI1NzMyOGMyMyIsInVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiQWRtaW4ifSwiaWF0IjoxNjYzODQwNzk3LCJleHAiOjE5NTE4NDA3OTd9.2kVD42lZ2kIcpRrKKzT5E8GOP5QuVBtV3AXygcvH2Po";

export type ExistingMockUser =
  | "testPlayer"
  | "expiredUser"
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
        ? mockTestPlayerAccessToken
        : mockTestPlayerRefreshToken;
    case "expireduser":
      return isAccessToken ? mockExpiredToken : mockExpiredRefreshToken;
    case "gameMaster":
      return isAccessToken ? mockGameMasterToken : mockGameMasterRefreshToken;
    case "admin":
      return isAccessToken ? mockAdminToken : mockAdminRefreshToken;
  }
  return "";
};

export const mockUsers: Record<ExistingMockUser | string, UserData> = {
  testPlayer: {
    password: "testpass10",
    token: mockTestPlayerAccessToken,
    refreshToken: mockTestPlayerRefreshToken,
  },
  expiredUser: {
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
    password: "adminpass10",
    token: mockAdminToken,
    refreshToken: mockAdminRefreshToken,
  },
};
