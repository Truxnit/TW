export type RoutesWithoutParams = "/" | "/login" | "/register";

interface RoutesWithParams {
  "/nsc/:nation/:gender": "nation" | "gender";
}

export type TwoWorldsRoutes = RoutesWithoutParams | keyof RoutesWithParams;

type ResolveRouteWithParam = <T extends keyof RoutesWithParams>(
  pattern: T,
  params: Record<RoutesWithParams[T], string | number>
) => string;

type ResolveRouteWithoutParam = <T extends RoutesWithoutParams>(
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
    const replacement = params[param];
    if (replacement == null) {
      throw new Error(
        `No parameter "${param}" provided for pattern "${pattern}"`
      );
    }
    return String(replacement);
  });
};
