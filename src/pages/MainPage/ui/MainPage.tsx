import { getUserData } from "@entities/User";

import { useSelector } from "react-redux";

export const MainPage = () => {
  const userInfo = useSelector(getUserData);

  console.log(userInfo);

  return (
    <div>
      <h1>Main</h1>
    </div>
  );
};
