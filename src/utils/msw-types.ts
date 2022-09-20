import { RequestHandler } from "msw";
import { ApiPaths } from "src/apiclient/backend/two-worlds-api/two-worlds-axios";

export type MswRequestHandler = RequestHandler;

export const apiPathToMswMatcher = (endpoint: ApiPaths): string => {
  return endpoint.replace(/{([a-zA-Z0-9_]+)}/gi, ":$1");
};

export const resolveApiPath = (
  endpoint: ApiPaths,
  params: Record<string, string>
): string => {
  return endpoint.replace(/{([a-zA-Z0-9_]+)}/gi, (substring, group) => {
    if (!Object.hasOwnProperty.call(params, group)) {
      throw new Error(`Expected replacement for '${group}' but found none`);
    }
    return Object.prototype.hasOwnProperty.call(params, group)
      ? params[group]
      : substring;
  });
};
