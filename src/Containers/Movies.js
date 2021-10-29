import React from "react";
import { useGetMovieByPageNumberQuery, useGetMovieGenreQuery } from "../services/movieApiService";

export default function Movies() {
  const { data: mData , error, isLoading, isSuccess, isError } =
    useGetMovieByPageNumberQuery({ listId: "3", pageNo: "2" });


    const { data: genraData, error:gerror, isLoading:isGLoading, isSuccess:isGSuccess, isError:isGError } =
    useGetMovieGenreQuery({ listId: "3", pageNo: "2" });

  return (
    <div className="App">
      {isError && <h4>Something went wrong</h4>}
      {isSuccess && <h4>Movie Database is parsed successfully</h4>}
      <div>
        {isSuccess &&
          mData &&
          mData.results.map((movie) => {
            return (
              <div class="w-full lg:w">
                <div>
                  <li>{movie.title}</li>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
