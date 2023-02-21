import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { articlesAPI } from '../http/api/articles'
import { commentsAPI } from '../http/api/comments'

export const store = configureStore({
  reducer: {
    [articlesAPI.reducerPath]: articlesAPI.reducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesAPI.middleware).concat(commentsAPI.middleware),
})
setupListeners(store.dispatch)
