import React, { ReactElement, ReactNode, useEffect } from "react";
import { render, RenderResult } from "@testing-library/react";
import { InitialEntry, Location } from "history";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";

let currentLocation: Location | null = null;

const GetRouteForTest: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    currentLocation = location;
  }, [location]);

  return <>{children}</>;
};

export const expectCurrentUrlPathToBe = (expectedPath: string): void => {
  if (currentLocation == null) {
    throw new Error("Make sure to use 'renderWithRouter' to render your test");
  }
  expect(currentLocation?.pathname).toEqual(expectedPath);
};

interface CustomRoute {
  path?: string; //| TwoWorldsRoutes;
  element: ReactElement;
}

export const renderWithRouter = (
  routes: CustomRoute[],
  initialEntries?: InitialEntry[],
  wrapperComponent?: React.FC
): RenderResult => {
  const ui = (
    <MemoryRouter initialEntries={initialEntries || ["/"]}>
      <GetRouteForTest>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path || "/"}
                element={route.element}
                key={route.path || "/"}
              />
            );
          })}
        </Routes>
      </GetRouteForTest>
    </MemoryRouter>
  );

  return render(ui, { wrapper: wrapperComponent });
};
