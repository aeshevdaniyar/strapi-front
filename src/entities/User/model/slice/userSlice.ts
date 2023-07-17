import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthData, User, UserSchema } from "../types/User";

const initialState: UserSchema = {
  inited: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = undefined;
      state.jwt = undefined;
      localStorage.removeItem("AUTH_TOKEN");
    },

    setAuthData: (state, action: PayloadAction<AuthData>) => {
      state.userData = action.payload.user;
      state.jwt = action.payload.jwt;
      state.inited = true;
      localStorage.setItem("AUTH_TOKEN", action.payload.jwt);
    },

    setUserData: (state, action: PayloadAction<User>) => {
      state.inited = true;
      state.userData = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
