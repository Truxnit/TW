export type AccessToken = string;
export type RefreshToken = string;

export interface Token {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}
