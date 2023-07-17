import { getUserData } from "@entities/User";
import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RouterPath } from "../config/routerConfig";
export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const userUserData = useSelector(getUserData);


  if (!userUserData) {
    return <Navigate to={RouterPath.REGISTER} />;
  }
  return <>{children}</>;
};
