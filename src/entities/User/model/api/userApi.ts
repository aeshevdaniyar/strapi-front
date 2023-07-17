import { User } from "../types/User";
import { baseQueryWithReAuth } from "@shared/api/rtk/baseQueryWithReAuth";
import { createApi } from "@reduxjs/toolkit/query/react";
import { userActions } from "../slice/userSlice";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReAuth,
  endpoints: (build) => ({
    getMe: build.query<User, void>({
      query: () => ({
        url: "/users/me",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userActions.setUserData(data))
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useGetMeQuery } = userApi;
