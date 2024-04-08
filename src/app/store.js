/* eslint-disable implicit-arrow-linebreak */
import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';

// Dont forget to set the middleware!!!
// https://stackoverflow.com/questions/69380121/middleware-for-rtk-query-api-at-reducerpath-api-has-not-been-added-to-the-stor

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
