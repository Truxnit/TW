// eslint-disable-next-line no-restricted-imports
import { optimistic } from "oazapfts";
import * as rawApi from "./generated/types";
import { getAuthorizationHeader } from "src/utils/auth/access-token";

export const api = optimistic({
  rawApi,
});

api.rawApi.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  authorization: getAuthorizationHeader(),
};
