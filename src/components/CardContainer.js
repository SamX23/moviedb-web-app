import Grid from "@material-ui/core/Grid";
import React from "react";
import VideoCard from "./VideoCard";

function CardContainer() {
  return (
    <Grid container justify="space-evenly" alignItems="center">
      <VideoCard movie={null} />
      <VideoCard movie={null} />
      <VideoCard movie={null} />
    </Grid>
  );
}

export default CardContainer;
