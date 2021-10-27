import './App.css';
import { useGetMovieByPageNumberQuery } from "./services/movieApiService";

const MovieCard =(props)=>{
  return <div>
    <li >{props.data.title}</li>
  </div>
}


function App() {

  const {data,error, isLoading, isSuccess, isError} = useGetMovieByPageNumberQuery({listId:"3", pageNo:"2"});
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ error", error)
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ isLoading", isLoading)
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ data", data)
  
  return (
    <div className="App">
      {isError && <h4>Something went wrong</h4>}
      {isSuccess && <h4>Movie Database is parsed successfully</h4>}
      <div >
      
        {isSuccess && data && data.results.map(movie=>{
          return<div class="w-full lg:w">
              <MovieCard data ={movie}/>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
