import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => 'book/all-books',
    }),

    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),

    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),

    postABook: builder.mutation({
      query: (data) => ({
        url: 'book/add-book',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});
export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useEditBookMutation,
  usePostABookMutation,
} = api;
