import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthData, UserSchema } from "../types/User";
import { authByEmailApi } from "@features/AuthByEmail";
import { loginByEmailApi } from "@features/LoginByEmail";

const initialState: UserSchema = {};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(
      authByEmailApi.endpoints.authByEmail.matchFulfilled,
      (state, action: PayloadAction<AuthData>) => {
        state.authData = action.payload;
      }
    );
    builder.addMatcher(
      loginByEmailApi.endpoints.loginByEmail.matchFulfilled,
      (state, action: PayloadAction<AuthData>) => {
        state.authData = action.payload;
      }
    );
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
