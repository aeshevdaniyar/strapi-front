import { rtkApi } from "@shared/api/rtkApi";
import { FormData } from "../types/schema";
import { AuthData } from "@entities/User";


export const authByEmailApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    authByEmail: build.mutation<AuthData, FormData>({
      query: (formData) => ({
        url: "/auth/local/register",
        body: formData,
        method: "POST",
      }),
    }),
  }),
});

export const { useAuthByEmailMutation } = authByEmailApi;
