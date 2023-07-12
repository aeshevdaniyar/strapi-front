import { userReducer } from "@entities/User";
import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "@shared/api/rtkApi";
export const store = configureStore({
  reducer: {
    [rtkApi.reducerPath]: rtkApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
