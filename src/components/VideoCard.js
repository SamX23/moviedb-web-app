import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const videoCard = makeStyles({
  root: {
    backgroundColor: "transparent",
    color: "black",
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
  // height: "350px",
  // transition: "transform 100ms",
  // "&:hover": {
  //   transform: "scale(1.09)",
  // },
  // "& > img": {
  //   width: "500px",
  //   objectFit: "contain",
  // },
  // "& > p": { margin: 0 },
  // "& > h2": { marginTop: "10px" },
  // },
});

function VideoCard({ movie }) {
  const classes = videoCard();
  const videoBaseUrl = "https://image.tmdb.org/t/p/original/";
  console.log(movie);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${videoBaseUrl}${movie.backdrop_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VideoCard;
