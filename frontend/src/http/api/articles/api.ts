import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPaginatedServerResponse, } from '../../shared'

import { IArticle, IArticlePreview, ICreateArticleFormData, TGetArticlesRequestParams } from './models'

export const articlesAPI = createApi({
  reducerPath: 'articlesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ROOT_URL,
  }),
  tagTypes: ['articles'], //
  endpoints: (builder) => ({
    getArticles: builder.query<IPaginatedServerResponse<IArticlePreview[]>, TGetArticlesRequestParams>({
      query: (pagination) => ({
        url: `/articles`,
        params: pagination,
      }),
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
