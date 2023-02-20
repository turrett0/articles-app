import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {articlesAPI} from "../http/api/articles";

export const store = configureStore({
	reducer: {
		[articlesAPI.reducerPath]: articlesAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articlesAPI.middleware),
});
setupListeners(store.dispatch)