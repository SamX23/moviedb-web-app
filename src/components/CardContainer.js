import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import VideoCard from "./VideoCard";

const flexContainer = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function CardContainer() {
  return (
    <Grid container justify="space-evenly" alignItem="center">
      <VideoCard item movie={null} />
      <VideoCard item movie={null} />
      <VideoCard item movie={null} />
      <VideoCard item movie={null} />
      <VideoCard item movie={null} />
      <VideoCard item movie={null} />
      <VideoCard item movie={null} />
    </Grid>
  );
}

export default CardContainer;
