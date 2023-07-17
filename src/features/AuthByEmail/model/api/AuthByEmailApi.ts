import { FormData } from "../types/schema";
import { AuthData, userActions } from "@entities/User";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "@shared/api/rtk/baseQueryWithReAuth";

export const authByEmailApi = createApi({
  baseQuery: baseQueryWithReAuth,
  reducerPath: "authApi",
  endpoints: (build) => ({
    authByEmail: build.mutation<AuthData, FormData>({
      query: (formData) => ({
        url: "/auth/local/register",
        body: formData,
        method: "POST",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        console.log("auth start");

        try {
          const { data } = await queryFulfilled;
          console.log(data);

          dispatch(userActions.setAuthData(data));
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useAuthByEmailMutation } = authByEmailApi;
