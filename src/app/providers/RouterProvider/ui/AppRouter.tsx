import { Routes, Route } from "react-router-dom";
import { routerConfig } from "../config/routerConfig";
import { PrivateRoute } from "./PrivateRoute";
export const AppRouter = () => {
  return (
    <Routes>
      {routerConfig.map((route) => {
        return (
          <Route
            path={route.path}
            element={
              route.private ? (
                <PrivateRoute>{route.element}</PrivateRoute>
              ) : (
                route.element
              )
            }
            key={route.path}
          />
        );
      })}
    </Routes>
  );
};
