import { useContext, useEffect, useState, useCallback } from "react";
import FlipMove from "react-flip-move";
import Grid from "@material-ui/core/Grid";
import axios from "../constants/axios";
import VideoCard from "./VideoCard";
import SearchContext from "../context";
import { API_KEY, URL } from "../constants/tmdb";
import Loading from "./Loading";

function CardContainer() {
  const { searchQuery, movieCategory } = useContext(SearchContext);
  const [movies, setMovies] = useState([]);

  const fetchData = useCallback(async (query) => {
    try {
      const movieResult = await axios.get(query);
      setMovies(movieResult.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const query =
      searchQuery === ""
        ? `${URL}discover/movie?with_genres=${movieCategory}&api_key=${API_KEY}`
        : `${URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`;

    const getData = setTimeout(() => {
      fetchData(query);
    }, 1000);

    return () => clearTimeout(getData);
  }, [searchQuery, movieCategory]);

  return (
    <FlipMove typeName={Grid} container justifyContent="start">
      {movies?.length > 0 ? (
        movies.map((movie) => <VideoCard key={movie.id} item movie={movie} />)
      ) : (
        <Loading />
      )}
    </FlipMove>
  );
}

export default CardContainer;
