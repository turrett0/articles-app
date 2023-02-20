import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IArticle, IArticlePreview, ICreateArticleFormData } from './models'

export const articlesAPI = createApi({
  reducerPath: 'articlesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ROOT_URL,
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<IArticlePreview[], void>({
      query: () => `/articles`,
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
    }),
  }),
})

export const { useGetArticlesQuery, useGetArticleQuery, useCreateArticleMutation } = articlesAPI
