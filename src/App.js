import './App.css';
import { useGetMovieByPageNumberQuery } from "./services/movieApiService";

function App() {

  const {data,error, isLoading, isSuccess, isError} = useGetMovieByPageNumberQuery({listId:"1", pageNo:"1"});
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ error", error)
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ isLoading", isLoading)
  console.log("🚀 ~ file: App.js ~ line 7 ~ App ~ data", data)
  
  return (
    <div className="App">
      {isError && <h4>Something went wrong</h4>}
      {isSuccess && <h4>Movie Database is parsed successfully</h4>}
      <div >
        
      </div>
    </div>
  );
}

export default App;
