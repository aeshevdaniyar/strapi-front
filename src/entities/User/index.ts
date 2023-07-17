export { userReducer } from "./model/slice/userSlice";
export { userActions } from "./model/slice/userSlice";
export type { AuthData, User } from "./model/types/User";
export {
  getUserData,
  getUserJwt,
  getUserInited,
} from "./model/selectors/userSelectors";
export { userApi, useGetMeQuery } from "./model/api/userApi";
