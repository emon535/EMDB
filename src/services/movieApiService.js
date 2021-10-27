
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieListApi = createApi({
    reducerPath: 'movieListApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/4/'}),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
      getMovieByPageNumber: builder.query({
        query:({listId, pageNo})=> `list/${listId}?page=${pageNo}&api_key=cd890f94a756b1518a2a17617a5b430e`,
      }),
      getMovieGenre:builder.query({
          query:()=>`genre/movie/list?api_key=cd890f94a756b1518a2a17617a5b430e`,
      })
    }),
  })

  export const {useGetMovieByPageNumberQuery, useGetMovieGenreQuery} = movieListApi