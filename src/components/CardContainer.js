import { useEffect, useState } from "react";
import axios from "../constants/axios";
import VideoCard from "./VideoCard";
import Grid from "@material-ui/core/Grid";
import FlipMove from "react-flip-move";

function CardContainer({ filter }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(filter)
      .then((e) => setMovies(e.data.results))
      .catch((e) => console.log(e));
  }, [filter]);

  return (
    <FlipMove
      typeName={Grid}
      container
      justify="space-evenly"
      alignItems="center"
    >
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => <VideoCard item key={movie.id} movie={movie} />)}
    </FlipMove>
  );
}

export default CardContainer;
