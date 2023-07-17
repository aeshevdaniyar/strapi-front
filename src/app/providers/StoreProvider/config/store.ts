import { userApi, userReducer } from "@entities/User";
import { authByEmailApi } from "@features/AuthByEmail";
import { loginByEmailApi } from "@features/LoginByEmail";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [loginByEmailApi.reducerPath]: loginByEmailApi.reducer,
    [authByEmailApi.reducerPath]: authByEmailApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      userApi.middleware,
      loginByEmailApi.middleware,
      authByEmailApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
