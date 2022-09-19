import React, { ReactNode } from "react";
import { Navigate, Route } from "react-router-dom";
import { TwoWorldsRoutes } from "src/utils/routing/resolveRoute";

interface TwoWorldsRouteProps {
  TargetPage: React.FC;
  path: TwoWorldsRoutes;
  guarded?: boolean;
}

export const protectedRoute = ({
  TargetPage,
  path,
  guarded = true,
}: TwoWorldsRouteProps): ReactNode => {
  if (guarded) {
    return <Route path={path} element={<Navigate to="/login" />} />;
  }

  /*  if (guarded && !isAuthorized) {
    return <Route path={path} element={<Navigate to="/login" />} />;
  }
  if (!isAllowedToAccess(path, group as Groups)) {
    return <Route path={path} element={<Navigate to={"/noAccess"} />} />;
  }
*/
  return <Route path={path} element={<TargetPage />} />;
};
