import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IComment, ICreateCommentFormData } from './models'

export const commentsAPI = createApi({
  reducerPath: 'commentsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ROOT_URL,
  }),
  endpoints: (builder) => ({
    getComments: builder.query<any, void>({
      query: () => `/comments`,
    }),
    createComments: builder.mutation<IComment, ICreateCommentFormData>({
      query: (body) => ({
        url: `/comments`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetCommentsQuery, useCreateCommentsMutation } = commentsAPI
