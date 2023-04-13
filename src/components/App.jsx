import { useState } from "react";
import SearchContext from "../context";
import { TYPE } from "../constants/tmdb";
import Routes from "../routes";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieCategory, setMovieCategory] = useState(TYPE.movie.popular);

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, movieCategory, setMovieCategory }}
    >
      <Routes />
    </SearchContext.Provider>
  );
}

export default App;
