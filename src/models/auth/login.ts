import { Groups } from "src/utils/hooks/useAuth";

export interface Identity {
  id: string;
  username: string;
  group: Groups; //todo rename
}

export interface AccessTokenParsed {
  identity: Identity;
  exp: number;
}
