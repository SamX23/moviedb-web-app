import { createContext } from "react";

const initialValue = {
  searchQuery: "",
  setSearchQuery: () => {},
  movieCategory: "",
  setMovieCategory: () => {},
};

const SearchContext = createContext();

export default SearchContext;
