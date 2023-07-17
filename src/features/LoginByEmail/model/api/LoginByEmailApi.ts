import { AuthData, userActions } from "@entities/User";

import { FormData } from "../types/schema";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "@shared/api/rtk/baseQueryWithReAuth";
export const loginByEmailApi = createApi({
  baseQuery: baseQueryWithReAuth,
  reducerPath: "loginApi",
  endpoints: (build) => ({
    loginByEmail: build.mutation<AuthData, FormData>({
      query: (formData) => ({
        url: "/auth/local",
        body: formData,
        method: "POST",
      }),

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userActions.setAuthData(data));
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useLoginByEmailMutation } = loginByEmailApi;
