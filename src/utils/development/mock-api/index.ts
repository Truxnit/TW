import { MswRequestHandler } from "src/utils/msw-types";
import { mockAccessTokenEndpoint } from "src/utils/development/mock-api/endpoints/mockAccessTokenEndpoint";
import { mockRefreshTokenEndpoint } from "src/utils/development/mock-api/endpoints/mockRefreshTokenEndpoint";

export function mockApiHandlers(): MswRequestHandler[] {
  return [mockAccessTokenEndpoint(), mockRefreshTokenEndpoint()];
}
