import React, { useEffect, useState } from "react";
import axios from "../constants/axios";
import VideoCard from "./VideoCard";
import Grid from "@material-ui/core/Grid";
import FlipMove from "react-flip-move";

function CardContainer({ filter }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(filter);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }

    fetchData();
  }, [filter]);

  return (
    <Grid container justify="space-evenly" alignItems="center">
      <FlipMove>
        {movies &&
          movies.map((movie) => (
            <VideoCard item key={movie.id} movie={movie} />
          ))}
      </FlipMove>
    </Grid>
  );
}

export default CardContainer;
