import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPagination } from '../../shared'

import { IArticle, IArticlePreview, ICreateArticleFormData } from './models'

export const articlesAPI = createApi({
  reducerPath: 'articlesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ROOT_URL,
  }),
  tagTypes: ['articles'], //
  endpoints: (builder) => ({
    getArticles: builder.query<IArticlePreview[], IPagination>({
      query: () => `/articles`,
      providesTags: ['articles'],
    }),
    getArticle: builder.query<IArticle, IArticle['id'] | null>({
      query: (id) => `/articles/${id}`,
    }),
    createArticle: builder.mutation<IArticle, ICreateArticleFormData>({
      query: (body) => ({
        url: `/articles`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['articles'],
    }),
  }),
})

export const { useGetArticlesQuery, useGetArticleQuery, useCreateArticleMutation } = articlesAPI
