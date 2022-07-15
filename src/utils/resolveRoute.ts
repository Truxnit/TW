export type TwoWorldsRoutesWithoutParams = "/" | "/login" | "/register";

interface TwoWorldsRoutesWithParams {
  "/nsc/:nation/:gender": "nation" | "gender";
}

export type TwoWorldsRoutes =
  | TwoWorldsRoutesWithoutParams
  | keyof TwoWorldsRoutesWithParams;

type ResolveRouteWithParam = <T extends keyof TwoWorldsRoutesWithParams>(
  pattern: T,
  params: Record<TwoWorldsRoutesWithParams[T], string | number>
) => string;

type ResolveRouteWithoutParam = <T extends TwoWorldsRoutesWithoutParams>(
  pattern: T
) => string;

export const resolveRoute: ResolveRouteWithParam & ResolveRouteWithoutParam = (
  pattern: string,
  params?: Record<string, string | number>
) => {
  if (params == null) {
    return pattern;
  }
  return pattern.replace(/:(\w+)/g, (completeMatch, param) => {
    const replacment = params[param];
    if (replacment == null) {
      throw new Error(
        `No parameter "${param}" provided for pattern "${pattern}"`
      );
    }
    return String(replacment);
  });
};
