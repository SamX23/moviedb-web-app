import React, { useEffect, useState } from "react";
import axios from "../constants/axios";
import requests from "../constants/requests";
import VideoCard from "./VideoCard";
import Grid from "@material-ui/core/Grid";

function CardContainer() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }

    fetchData();
  }, []);

  return (
    <Grid container justify="space-evenly" alignItems="center">
      {movies.map((movie, id) => (
        <VideoCard item key={id} movie={movie} />
      ))}
    </Grid>
  );
}

export default CardContainer;
