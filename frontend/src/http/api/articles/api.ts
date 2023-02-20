import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IArticle} from "./models";

export const articlesAPI = createApi({
	reducerPath: "articlesAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_ROOT_URL,
	}),
	endpoints: (builder) => ({
		getArticles: builder.query<IArticle[], void>({
			query: () => `/articles`,
		}),
	}),
});

export const {useGetArticlesQuery} = articlesAPI;
