import { rtkApi } from "@shared/api/rtkApi";
import { User } from "../types/User";

export const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, void>({
      query: () => "/users/me",
    }),
  }),
});

export const { useGetUserQuery } = userApi;
