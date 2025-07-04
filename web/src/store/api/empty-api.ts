import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_MOVIES_API_URL }),
  endpoints: () => ({}),
})

export const { reducer, reducerPath } = emptySplitApi;
