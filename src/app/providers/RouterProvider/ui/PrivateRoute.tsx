import { getUserAuthData } from "@entities/User";
import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RouterPath } from "../config/routerConfig";
export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const userAuthData = useSelector(getUserAuthData);

  if (!userAuthData) {
    return <Navigate to={RouterPath.LOGIN} />;
  }
  return <>{children}</>;
};
