import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPaginatedServerRequest, IPaginatedServerResponse } from '../../shared'
import { IArticle } from '../articles/models'
import { IComment, ICreateCommentFormData } from './models'

export const commentsAPI = createApi({
  reducerPath: 'commentsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ROOT_URL,
  }),
  endpoints: (builder) => ({
    getComments: builder.query<
      IPaginatedServerResponse<IComment[]>,
      IPaginatedServerRequest<{ article: IArticle['id'] }>
    >({
      query: (params) => ({
        url: `/comments`,
        params,
      }),
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
