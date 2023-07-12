import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: _APP_BASE_API_,
    prepareHeaders(headers) {
      const token = localStorage.getItem("AUTH_TOKEN") as string;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: () => ({}),
});
