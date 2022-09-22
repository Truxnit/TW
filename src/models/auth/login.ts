import { Roles } from "src/models/auth/auth";

export interface Identity {
  id: string;
  username: string;
  role: Roles; //todo rename
}

export interface AccessTokenParsed {
  identity: Identity;
  exp: number;
}
