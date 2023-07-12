import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthData, User, UserSchema } from "../types/User";
import { authByEmailApi } from "@features/AuthByEmail";
import { loginByEmailApi } from "@features/LoginByEmail";
import { userApi } from "../api/userApi";

const initialState: UserSchema = {};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem("AUTH_TOKEN");
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      authByEmailApi.endpoints.authByEmail.matchFulfilled,
      (state, action: PayloadAction<AuthData>) => {
        state.authData = action.payload;
        localStorage.setItem("AUTH_TOKEN", action.payload.jwt);
      }
    );
    builder.addMatcher(
      loginByEmailApi.endpoints.loginByEmail.matchFulfilled,
      (state, action: PayloadAction<AuthData>) => {
        state.authData = action.payload;
        localStorage.setItem("AUTH_TOKEN", action.payload.jwt);
      }
    );
    builder.addMatcher(
      userApi.endpoints.getUser.matchFulfilled,
      (state, action: PayloadAction<User>) => {
        state.authData = {
          user: action.payload,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          jwt: localStorage.getItem("AUTH_TOKEN") as string,
        };
      }
    );
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
