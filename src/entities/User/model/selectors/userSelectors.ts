import { RootState } from "@app/providers/StoreProvider";

export const getUserData = (state: RootState) => state.user?.userData;

export const getUserJwt = (state: RootState) => state.user?.jwt;
export const getUserInited = (state: RootState) => state.user.inited;
