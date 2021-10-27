import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { movieListApi } from '../services/movieApiService';

export const store = configureStore({
  reducer: {
      [movieListApi.reducerPath]:movieListApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(movieListApi.middleware),
  
});

setupListeners(store.dispatch)