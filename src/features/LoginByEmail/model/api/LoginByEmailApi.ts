import { AuthData } from "@entities/User";
import { rtkApi } from "@shared/api/rtkApi";
import { FormData } from "../types/schema";

export const loginByEmailApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    loginByEmail: build.mutation<AuthData, FormData>({
      query: (formData) => ({
        url: "/auth/local",
        body: formData,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginByEmailMutation } = loginByEmailApi;
