import { api } from '@/redux/api/apiSlice';

const bookAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => 'book/all-books',
      providesTags: ['deleteBook'],
    }),

    singleBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: ['deleteBook'],
    }),

    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['deleteBook'],
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
  useDeleteBookMutation,
  useEditBookMutation,
  useGetBooksQuery,
  usePostABookMutation,
  useSingleBookQuery,
} = bookAPI;
