import React from "react";
import { useGetMovieByPageNumberQuery } from "../services/movieApiService";

export default function Movies() {
  const { data, error, isLoading, isSuccess, isError } =
    useGetMovieByPageNumberQuery({ listId: "3", pageNo: "2" });

  return (
    <div className="App">
      {isError && <h4>Something went wrong</h4>}
      {isSuccess && <h4>Movie Database is parsed successfully</h4>}
      <div>
        {isSuccess &&
          data &&
          data.results.map((movie) => {
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
