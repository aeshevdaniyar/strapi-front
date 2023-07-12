import { LoginPage } from "@pages/LoginPage";
import { MainPage } from "@pages/MainPage";
import { RegisterPage } from "@pages/RegisterPage";
import { ReactNode } from "react";

export enum RouterPath {
  MAIN = "/",
  QUIZ = "/quiz",
  REGISTER = "/register",
  LOGIN = "/login",
}

export interface RouterConfig {
  path: RouterPath;
  element: ReactNode;
  private?: boolean;
}
export const routerConfig: RouterConfig[] = [
  {
    path: RouterPath.MAIN,
    element: <MainPage />,
    private:true,
  },
  {
    path: RouterPath.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: RouterPath.LOGIN,
    element: <LoginPage />,
  },
];
